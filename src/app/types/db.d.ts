import { vote } from "@/lib/db/schema";
import { InferSelectModel } from "drizzle-orm";

export type Vote = InferSelectModel<typeof vote>;
