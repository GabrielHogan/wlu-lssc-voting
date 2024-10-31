"use server";
import "server-only";

import { db } from "@/db/drizzle";
import { options, polls, pollsToOptions, votes } from "@/db/schema";
import { voteFormValues } from "@/components/VoteForm";
import { desc } from "drizzle-orm";

export const createVote = async (values: voteFormValues, pollId: string) => {
  "use server";

  // Check if poll is active and not ended
  const poll = await db.query.polls.findFirst({
    where: (polls, { eq }) => eq(polls.id, pollId),
  });

  if (!poll) {
    return {
      data: null,
      error: "This poll was not found, please try again",
    };
  }

  if (poll.endsAt < new Date()) {
    return {
      data: null,
      error:
        "This poll has ended, please contact the presenter for more information.",
    };
  }

  // Check if email has already voted in this poll
  const existingVote = await db.query.votes.findFirst({
    where: (votes, { and, eq }) =>
      and(eq(votes.email, values.email), eq(votes.pollId, pollId)),
  });

  if (existingVote) {
    return {
      data: null,
      error: "You have already voted in this poll. You can only vote once.",
    };
  }

  const data = await db.insert(votes).values({
    email: values.email,
    grade: values.grade ?? null,
    raffleEntry: values.raffleEntry ?? false,
    optionId: values.option,
    pollId,
  });

  if (!data) {
    return {
      data: null,
      error:
        "An error occurred while trying to save your vote. Please try again.",
    };
  }

  return {
    data,
    error: null,
  };
};

export const fillDB = async () => {
  const poll = await db
    .insert(polls)
    .values({
      name: "2025 Lenfest Season",
      presenter: "The Lenfest Student Selection Committee",
      description: "Select your favorite performance below.",
      endsAt: new Date("2024-11-30"),
    })
    .returning();

  const pollOptions = [
    {
      name: "MOMIX (Alice in Wonderland)",
      description:
        "(DANCE/PERFORMING ARTS) Join Moses Pendleton’s dancers on an Alice in Wonderland style journey of dance, fashion and music that will bring you right into the absurd world of Wonderland.",
      video: "https://www.youtube.com/embed/KutapwSQqvg",
    },
    {
      name: "Bereishit Dance Company",
      description:
        "(DANCE/MUSIC) Bereishit is a Seoul-based dance company that brings Korean drumming, live singing, stunts and a contemporary take on Korean traditional culture to the stage.",
      video: "https://www.youtube.com/embed/k9WpthWvQl4",
    },
    {
      name: "Fires of Varanasi Plena Libre",
      description:
        "(DANCE/PERFORMING ARTS) Fires of Varanasi brings audiences on an immersive, artistic ritual of Hindu origin meant to honor Hindu thought and immigrant experiences.",
      video: "https://www.youtube.com/embed/EdS_3XPCnSM",
    },
    {
      name: "Plena Libre",
      description:
        "(MUSIC) Plena Libre combines traditional Plena and Bomba rhythms with other Afro-Caribbean styles and jazz to create a contagious performance that honors the group’s deep sense of indigenous musical traditions, while embracing modern sounds.",
      video: "https://www.youtube.com/embed/gHZEIJ2aVrU",
    },
    {
      name: "Princess Lockeroo",
      description:
        "(FASHION/DANCE) Princess Lockeroo is proud to present the ‘High Fashion Floral Extravaganza Show,’ as Lockeroo (known as the “Queen of Waacking”) spreads  the gospel and history of waacking dance culture.",
      video: "https://www.youtube.com/embed/DeurD8pcLMM",
    },
    {
      name: "Dakhabrakha",
      description:
        "(MUSIC) Donning striking costumes, straight from Kyiv, “ethno-chaos” superstars and proud ambassadors of Free Ukraine bring their incredible trans-national folk-pop-punk music to the stage.",
      video: "https://www.youtube.com/embed/bbYvTCGqVRA",
    },
  ];

  const insertedPollOptions = await db
    .insert(options)
    .values(pollOptions)
    .returning();

  for (const option of insertedPollOptions) {
    await db.insert(pollsToOptions).values({
      pollId: poll[0].id,
      optionId: option.id,
    });
  }

  console.log("DB filled");
};
