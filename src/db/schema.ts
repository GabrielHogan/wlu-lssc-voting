import { InferSelectModel, relations } from "drizzle-orm";
import {
  boolean,
  pgTable,
  primaryKey,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { Option } from "lucide-react";

export const options = pgTable("option", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),

  name: text("name").notNull(),
  description: text("description").notNull(),
  image: text("image"),
  video: text("video"),

  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const votes = pgTable("vote", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),

  email: text("email"),
  grade: text("grade"),
  raffleEntry: boolean("raffleEntry"),

  optionId: text("optionId").notNull(),
  pollId: text("pollId").notNull(),

  createdAt: timestamp("createdAt").notNull().defaultNow(),
});

export const polls = pgTable("poll", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),

  name: text("name").notNull(),
  presenter: text("presenter").notNull(),
  description: text("description").notNull(),

  endsAt: timestamp("endsAt").notNull(),

  createdAt: timestamp("createdAt").notNull().defaultNow(),
});

export const pollsToOptions = pgTable(
  "polls_to_options",
  {
    pollId: text("poll_id").references(() => polls.id),
    optionId: text("option_id").references(() => options.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.pollId, t.optionId] }),
  })
);

export const pollsToOptionsRelations = relations(pollsToOptions, ({ one }) => ({
  poll: one(polls, {
    fields: [pollsToOptions.pollId],
    references: [polls.id],
  }),
  option: one(options, {
    fields: [pollsToOptions.optionId],
    references: [options.id],
  }),
}));

export const optionsRelations = relations(options, ({ many }) => ({
  votes: many(votes, {
    relationName: "options_votes",
  }),
  polls: many(pollsToOptions),
}));

export const votesRelations = relations(votes, ({ one }) => ({
  option: one(options, {
    relationName: "options_votes",
    fields: [votes.optionId],
    references: [options.id],
  }),
  poll: one(polls, {
    relationName: "votes_polls",
    fields: [votes.pollId],
    references: [polls.id],
  }),
}));

export const pollRelations = relations(polls, ({ many }) => ({
  options: many(pollsToOptions),
  votes: many(votes, {
    relationName: "votes_polls",
  }),
}));

export type Option = InferSelectModel<typeof options>;
export type Vote = InferSelectModel<typeof votes>;
export type Poll = InferSelectModel<typeof polls>;
