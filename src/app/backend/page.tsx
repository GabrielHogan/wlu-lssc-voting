import { db } from "@/lib/db";
import { vote } from "@/lib/db/schema";
import { getTableColumns } from "drizzle-orm";
import { FC } from "react";

interface PageProps {}

// oh yeah, this is the future
export const runtime = "edge";

const Page: FC<PageProps> = async ({}) => {
  const { email, updated_at, ...otherCols } = getTableColumns(vote);

  const results = await db.select(otherCols).from(vote);

  return (
    <div className="space-y-2">
      [
      {results.map((res) => (
        <pre key={res.id} className="bg-black rounded-md text-white w-fit p-2">
          {JSON.stringify(res, null, 2)},
        </pre>
      ))}
      ]
    </div>
  );
};

export default Page;
