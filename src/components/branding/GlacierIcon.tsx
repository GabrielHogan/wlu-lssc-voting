import { FC, SVGProps } from "react";

interface GlacierIconProps extends SVGProps<SVGSVGElement> {}

const GlacierIcon: FC<GlacierIconProps> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 96"
      fill="none"
      {...props}
    >
      <path
        data-name="First Iceberg"
        d="M36.64 39.34c4.32 2.49 5.8 7.99 3.31 12.29L16.86 91.49c-2.49 4.31-8.02 5.78-12.34 3.29s-5.8-7.99-3.31-12.29L24.3 42.63c2.49-4.31 8.02-5.78 12.34-3.29Z"
        className="fill-current"
      />
      <path
        data-name="Second Iceberg"
        d="m92.31 1.21.03.02c4.31 2.48 5.78 7.97 3.3 12.26L50.48 91.5c-2.49 4.3-8.01 5.77-12.32 3.29l-.03-.02c-4.31-2.48-5.78-7.97-3.3-12.26L79.99 4.5C82.48.2 88-1.27 92.31 1.21Z"
        className="fill-sky-500"
      />
      <path
        data-name="Third Iceberg"
        d="M107.92 32.42c4.32 2.49 5.8 7.99 3.31 12.29l-27.1 46.78c-2.49 4.31-8.02 5.78-12.34 3.29s-5.8-7.99-3.31-12.29l27.1-46.78c2.49-4.31 8.02-5.78 12.34-3.29Z"
        className="fill-pink-500"
      />
      <path
        data-name="Fourth Iceberg"
        d="M123.48 63.6c4.32 2.49 5.8 7.99 3.31 12.29l-9.04 15.6c-2.49 4.31-8.02 5.78-12.34 3.29s-5.8-7.99-3.31-12.29l9.04-15.6c2.49-4.31 8.02-5.78 12.34-3.29Z"
        className="fill-emerald-500"
      />
    </svg>
  );
};

export default GlacierIcon;
