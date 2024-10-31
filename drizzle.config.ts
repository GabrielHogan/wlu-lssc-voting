import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "src/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DB_URL!,
    // url: "postgres://CaresUser:CaresPassword@localhost:5433/cares",
  },
});
