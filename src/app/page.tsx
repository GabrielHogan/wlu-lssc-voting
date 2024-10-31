import VoteForm from "@/components/VoteForm";
import { db } from "@/db/drizzle";

export const dynamic = "force-dynamic";

const PollPage = async () => {
  const poll = await db.query.polls.findFirst({
    where: (polls, { gte }) => gte(polls.endsAt, new Date()),
    with: {
      options: {
        with: {
          option: true,
        },
      },
    },
  });

  if (!poll) {
    return (
      <div className="flex items-center justify-center h-[90vh]">
        <h1 className="text-2xl font-bold">No active polls found</h1>
      </div>
    );
  }

  const options = poll.options
    .map((o) => o.option)
    .filter((option) => option !== null);

  // Randomize the order of the options
  options.sort(() => Math.random() - 0.5);

  if (!options.length) {
    return (
      <div className="flex items-center justify-center h-[90vh]">
        <h1 className="text-2xl font-bold">No options found</h1>
      </div>
    );
  }

  return (
    <div className="flex md:max-w-2xl flex-col items-center justify-center space-y-8 mx-auto min-h-[90vh]">
      <div className="text-center space-y-1 [&_*]:transition-all [&_*]:duration-1000">
        <div>
          <h3 className="italic text-xs">Presented by</h3>
          <h2 className="italic text-sm">{poll.presenter}</h2>
        </div>

        <h1 className="sm:text-4xl text-2xl font-bold">
          Select your favorite!
        </h1>

        <p className="sm:text-[16px] text-[12px] font-normal text-muted-foreground p-0">
          {poll.description} <br />
          Click the options below to learn more.
        </p>
      </div>

      <VoteForm options={options} pollId={poll.id} />
    </div>
  );
};

export default PollPage;
