import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";

import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(process.env.DB!);
const db = drizzle(sql);

const userTable = pgTable("user", {
  id: text("id").primaryKey(),
  discordId: text("discord_id").notNull().unique(),
  email: text("email").notNull(),
  avatar: text("avatar").notNull(),
});

const sessionTable = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

const DrizzleAdapter = new DrizzlePostgreSQLAdapter(
  db,
  sessionTable,
  userTable
);

export { db, DrizzleAdapter, userTable, sessionTable };
