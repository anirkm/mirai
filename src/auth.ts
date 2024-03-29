import { Lucia, TimeSpan } from "lucia";

import { DrizzleAdapter } from "./DrizzleAdapter";

export const lucia = new Lucia(DrizzleAdapter, {
  sessionExpiresIn: new TimeSpan(1, "d"),
  sessionCookie: {
    name: "ekip",
    expires: false,
    attributes: {
      secure: false,
    },
  },
  getUserAttributes: async (user) => {
    return {
      discordId: user.discordId,
      email: user.email,
      avatar: user.avatar,
    };
  },
});

// IMPORTANT!
declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseUserAttributes {
  discordId: string;
  email: string;
  avatar: string;
}
