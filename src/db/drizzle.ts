import "server-only";

import { drizzle } from "drizzle-orm/postgres-js";
// import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import * as schema from "./schema";

// for migrations
// const migrationClient = postgres("postgres://postgres:adminadmin@0.0.0.0:5432/db", { max: 1 });
// migrate(drizzle(migrationClient), ...)

export const connection = postgres(process.env.DB_URL!, {
  max: 1,
});

export const db = drizzle(connection, { schema });

if (!db) {
  throw new Error("Could not connect to database");
}
