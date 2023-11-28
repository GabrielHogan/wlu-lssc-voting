import type { Config } from "drizzle-kit";
import "dotenv/config";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

export default {
  driver: "mysql2",
  schema: "./src/lib/db/schema.ts",
  out: "./src/lib/db/migrations",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
  breakpoints: true,
  tablesFilter: ["deans_*"],
} satisfies Config;
