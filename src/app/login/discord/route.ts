import { generateState } from "arctic";
import discordAuth from "@/lib/discord";
import { cookies } from "next/headers";

export async function GET(): Promise<Response> {
  const state = generateState();
  const url = await discordAuth.createAuthorizationURL(state, {
    scopes: ["identify", "email"],
  });

  cookies().set("d_o_s", state, {
    path: "/",
    secure: false,
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: "lax",
  });

  return Response.redirect(url);
}
