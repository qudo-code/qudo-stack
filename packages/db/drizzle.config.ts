import { defineConfig } from "drizzle-kit";
import { DATABASE_URL } from "env";

export default defineConfig({
  dialect: "postgresql",
  schema: "./schema",
  dbCredentials: {
    url: DATABASE_URL,
  },
});
