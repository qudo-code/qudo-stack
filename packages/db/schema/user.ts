import { pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

import { createId } from "@paralleldrive/cuid2";
import { createInsertSchema, createSelectSchema } from "drizzle-typebox";
import { t } from "elysia";
import { db } from "../db";
import { eq, or } from "drizzle-orm";

// Define database table
export const user = pgTable("user", {
  id: varchar("id")
    .$defaultFn(() => createId())
    .primaryKey(),
  username: varchar("username").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Define insert user schema
const _userSchema = createInsertSchema(user, {
  id: t.String(),
});

// Define select user schema
export const _selectUserSchema = createSelectSchema(user, {
  id: t.Optional(t.String()),
  username: t.Optional(t.String()),
});

// Required user id only
export const _selectUserByIdSchema = createSelectSchema(user, {
  id: t.String(),
});

export const selectUserByIdSchema = t.Omit(_selectUserByIdSchema, [
  "createdAt",
  "username",
]);

// Define create user schema
export const createUserSchema = t.Omit(_userSchema, ["id", "createdAt"]);

// Define update user schema and require user id
export const updateUserSchema = t.Omit(_userSchema, ["createdAt"]);

// Optional user id and username
export const selectUserSchema = t.Omit(_selectUserSchema, ["createdAt"]);

export const getUser = async (input: { id?: string; username?: string }) => {
  const filter = {
    id: input.id ?? "",
    username: input.username ?? "",
  };

  if (!filter.id && !filter.username) {
    return null;
  }

  return db
    .select()
    .from(user)
    .where(or(eq(user.id, filter.id), eq(user.username, filter.username)));
};

export const createUser = async (input: { username: string }) =>
  db.insert(user).values({
    username: input.username,
  });

export const updateUser = async (input: { id?: string; username: string }) => {
  if (!input.id) throw new Error("User id is required");

  return db
    .update(user)
    .set({
      username: input.username,
    })
    .where(eq(user.id, input.id));
};

export const deleteUser = async (input: { id: string }) =>
  db.delete(user).where(eq(user.id, input.id));
