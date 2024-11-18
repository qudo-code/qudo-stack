import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./schema",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
});
