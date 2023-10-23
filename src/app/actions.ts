"use server";

import { db } from "@/lib/db";
import { vote } from "@/lib/db/schema";
import { z } from "zod";
// import { voteFormSchema } from "./page";

export const voteFormSchema = z.object({
  email: z.string().email(),
  grade: z
    .enum(["First Year", "Sophomore", "Junior", "Senior", "1L", "2L", "3L"])
    .optional(),
  raffleEntry: z.boolean().optional(),
  option: z.string(),
});

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
