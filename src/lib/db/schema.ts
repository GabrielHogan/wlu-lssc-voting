import {
  bigint,
  boolean,
  mysqlTableCreator,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

const mysqlTable = mysqlTableCreator((name) => `deans_${name}`);

export const vote = mysqlTable("vote", {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),

  email: varchar("email", { length: 256 }).notNull(),
  grade: varchar("grade", { length: 256 }),
  raffleEntry: boolean("raffleEntry"),
  option: varchar("option", { length: 256 }).notNull(),

  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").notNull().defaultNow().onUpdateNow(),
});
