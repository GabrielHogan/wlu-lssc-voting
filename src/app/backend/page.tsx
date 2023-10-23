import { db } from "@/lib/db";
import { vote } from "@/lib/db/schema";
import { FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = async ({}) => {
  const results = await db.select().from(vote);

  return (
    <div>
      <pre>
        <code>{JSON.stringify(results, null, 2)}</code>
      </pre>
    </div>
  );
};

export default Page;
