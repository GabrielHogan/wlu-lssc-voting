"use server";

import { db } from "@/lib/db";
import { vote } from "@/lib/db/schema";
import { z } from "zod";
import { voteFormSchema } from "./page";

export const createVote = async (values: z.infer<typeof voteFormSchema>) => {
  "use server";

  const data = await db.insert(vote).values({
    email: values.email,
    grade: values.grade ?? null,
    raffleEntry: values.raffleEntry ?? false,
    option: values.option,
  });

  return data;
};
