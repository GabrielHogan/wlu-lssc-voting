import { FC } from "react";
import Link from "next/link";

import Icon from "./Icon";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <Link className="flex items-center" href="https://github.com/">
      <Icon className="mr-1 h-12 w-12 rounded-md text-blue-950 dark:text-white" />

      <h1 className="text-xl font-bold">
        <span className="text-blue-950 dark:text-white">Glacier</span>
        <span className="text-blue-500">Edu</span>
      </h1>
    </Link>
  );
};

export default Logo;
