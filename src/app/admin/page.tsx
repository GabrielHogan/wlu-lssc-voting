import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

import {
  ActivitySquare,
  Clock,
  CopySlash,
  Download,
  Ticket,
} from "lucide-react";
import { FC } from "react";
// import Charts from "./Charts";
import { format } from "date-fns";
import { db } from "@/db/drizzle";
import { votes } from "@/db/schema";

export const dynamic = "force-dynamic";

interface PageProps {}

const Page: FC<PageProps> = async ({}) => {
  const poll = await db.query.polls.findFirst();

  if (!poll) {
    return (
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-center">
          No polls found. Please create a poll to get started.
        </h1>
      </main>
    );
  }

  const results = await db.query.votes.findMany({
    where: (votes, { eq }) => eq(votes.pollId, poll.id),
  });

  const surveyLiveSince = new Date(Date.now() - poll.createdAt.getTime());

  return (
    // <div className="space-y-2">
    //   [
    //   {results.map((res) => (
    //     <pre key={res.id} className="bg-black rounded-md text-white w-fit p-2">
    //       {JSON.stringify(res, null, 2)},
    //     </pre>
    //   ))}
    //   ]
    // </div>
    <main className="flex-1 space-y-4">
      <div className="flex items-center md:justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-center md:text-left">
          LSSC Polling Dashboard
        </h2>

        <Button disabled>
          <Download className="h-4 w-4 mr-2" />
          Download Data
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0">
            <CardTitle className="text-md font-medium">
              Total Responses
            </CardTitle>
            <ActivitySquare className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{results.length}</div>
            <p className="text-xs text-muted-foreground">
              {/* +100% from last week */}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0">
            <CardTitle className="text-md font-medium">
              Total Raffle Entries
            </CardTitle>
            <Ticket className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {/* Count number of times raffleEntry is true */}
              {results.filter((res) => res.raffleEntry).length}
            </div>
            <p className="text-xs text-muted-foreground">
              {/* +100% from last week */}
            </p>
          </CardContent>
        </Card>

        {/* <Card className="hidden md:block">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0">
            <CardTitle className="text-md font-medium">Duplicates</CardTitle>
            <CopySlash className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{duplicatesCount}</div>
            <p className="text-xs text-muted-foreground">
              +100% from last week
            </p>
          </CardContent>
        </Card> */}

        <Card className="hidden md:block">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0">
            <CardTitle className="text-md font-medium">
              Survey Live Since
            </CardTitle>
            <Clock className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {format(surveyLiveSince, "d 'Days,' HH 'Hours")}
            </div>
            <p className="text-xs text-muted-foreground">That’s a long time!</p>
          </CardContent>
        </Card>
      </div>

      <p>Charts Coming Back Soon</p>

      <h1 className="font-bold text-xl">
        These stats are inaccurate and should not currently be used.
      </h1>

      {/* <Charts results={results} /> */}
    </main>
  );
};

export default Page;
