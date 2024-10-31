CREATE TABLE IF NOT EXISTS "option" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"image" text,
	"video" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "poll" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"presenter" text NOT NULL,
	"description" text NOT NULL,
	"endsAt" timestamp NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "polls_to_options" (
	"poll_id" text,
	"option_id" text,
	CONSTRAINT "polls_to_options_poll_id_option_id_pk" PRIMARY KEY("poll_id","option_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "vote" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"grade" text,
	"raffleEntry" boolean,
	"optionId" text NOT NULL,
	"pollId" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "polls_to_options" ADD CONSTRAINT "polls_to_options_poll_id_poll_id_fk" FOREIGN KEY ("poll_id") REFERENCES "public"."poll"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "polls_to_options" ADD CONSTRAINT "polls_to_options_option_id_option_id_fk" FOREIGN KEY ("option_id") REFERENCES "public"."option"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
