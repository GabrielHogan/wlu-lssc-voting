import Link from "next/link";
import { FC } from "react";

import ThemeSwitcher from "./ThemeSwitcher";
import GlacierIcon from "./branding/GlacierIcon";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <>
      <div className="p-2 border-t border-muted bg-background fixed bottom-0 right-0 left-0 flex items-center justify-between">
        <div className="flex items-center">
          <p className="text-xs font-light mr-2">Powered by</p>

          <Link className="flex items-center" href="https://gabrielhogan.com">
            <GlacierIcon className="mr-1 h-6 w-6" />
            <h1 className="text-lg font-bold">
              <span className="text-blue-950 dark:text-white mr-0.5">
                Glacier
              </span>
              <span className="text-sky-500">Integration</span>
            </h1>
          </Link>
        </div>

        <ThemeSwitcher className="scale-125" />
      </div>
    </>
  );
};

export default Footer;
