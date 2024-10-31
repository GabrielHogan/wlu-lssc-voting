"use client";

import { fillDB } from "@/app/actions";
import { Button } from "@/components/ui/Button";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <Button onClick={() => fillDB()}>FillDB</Button>
    </div>
  );
};

export default page;
