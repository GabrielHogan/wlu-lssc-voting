import Link from "next/link";
import { FC } from "react";
import Icon from "./branding/Icon";
import ThemeSwitcher from "./ThemeSwitcher";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <>
      <div className="p-2 border-t border-muted bg-background fixed bottom-0 right-0 left-0 flex items-center justify-between">
        <div className="flex items-center">
          <p className="text-xs font-light ">Powered by </p>
          <Link className="flex items-center" href="https://gabrielhogan.com">
            <Icon className="mr-0 h-8 w-8 rounded-md text-blue-950 dark:text-white" />
            <h1 className="text-lg font-bold">
              <span className="text-blue-950 dark:text-white">Glacier</span>
              <span className="text-emerald-500">Learn</span>
            </h1>
          </Link>
        </div>

        <ThemeSwitcher className="scale-125" />
      </div>
    </>
  );
};

export default Footer;
