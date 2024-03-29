import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import discordAuth from "@/lib/discord";
import { db, userTable } from "@/DrizzleAdapter";
import { OAuth2RequestError } from "arctic";
import { eq } from "drizzle-orm";
import { lucia } from "@/auth";
import { generateId } from "lucia";
import { log } from "console";

export async function GET(req: NextRequest, res: NextResponse) {
  const stateCookie = cookies().get("d_o_s");

  const url = new URL(req.url);
  const state = url.searchParams.get("state");
  const code = url.searchParams.get("code");

  if (!state || !stateCookie || !code || stateCookie.value !== state) {
    return new NextResponse(null, {
      status: 400,
    });
  }

  try {
    const token = await discordAuth.validateAuthorizationCode(code);
    const user: DiscordOAuth2User = await fetch(
      "https://discord.com/api/users/@me",
      {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      }
    ).then((res) => res.json());

    const existingUser = await db
      .select()
      .from(userTable)
      .where(eq(userTable.discordId, user.id))
      .execute();

    if (existingUser.length !== 0) {
    await lucia.invalidateUserSessions(existingUser[0].id);
      const session = await lucia.createSession(existingUser[0].id, {});
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
      return new NextResponse(JSON.stringify(user), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const userId = generateId(16);

    const dbUser = await db
      .insert(userTable)
      .values({
        id: userId,
        discordId: user.id,
        email: user.email,
        avatar: user.avatar,
      })
      .execute();

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );

    return new NextResponse(JSON.stringify(dbUser), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    if (error instanceof OAuth2RequestError) {
      return NextResponse.json(error, {
        status: 500,
      });
    }
    return new NextResponse(JSON.stringify(error), {
      status: 500,
    });
  }
}
