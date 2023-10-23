import { FC } from "react";

import { cn } from "@/lib/utils";

import "@/styles/glacierIconAnimate.css";

interface IconProps {
  className?: string;
}

const Icon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={cn(className)}
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <filter
          id="filter1"
          x="0"
          y="0"
          width="1000"
          height="1000"
          filterUnits="userSpaceOnUse"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="36.836676"></feGaussianBlur>
          <feOffset dx="-0" dy="2.631191" result="offsetblur"></feOffset>
          <feFlood floodColor="#ff4125" floodOpacity="0.750345"></feFlood>
          <feComposite in2="offsetblur" operator="in"></feComposite>
          <feMerge>
            <feMergeNode></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
        <path
          id="Path"
          fill="none"
          stroke="#d82777"
          strokeWidth="59.107243"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#filter1)"
          d="M 695.130737 281.75647 L 355.264069 702.895508"
          className="svg-elem-1"
        ></path>
        <filter
          id="filter2"
          x="0"
          y="0"
          width="1000"
          height="1000"
          filterUnits="userSpaceOnUse"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="31.574294"></feGaussianBlur>
          <feOffset dx="-0" dy="2.631191" result="offsetblur"></feOffset>
          <feFlood floodColor="#d4e554" floodOpacity="0.808485"></feFlood>
          <feComposite in2="offsetblur" operator="in"></feComposite>
          <feMerge>
            <feMergeNode></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
        <path
          id="Path-copy"
          fill="none"
          stroke="#dced31"
          strokeWidth="48.277218"
          strokeLinecap="round"
          filter="url(#filter2)"
          d="M 751.282593 343.819031 L 463.134796 704.37323"
          className="svg-elem-2"
        ></path>
        <filter
          id="filter3"
          x="0"
          y="0"
          width="1000"
          height="1000"
          filterUnits="userSpaceOnUse"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="59.201801"></feGaussianBlur>
          <feOffset dx="-0" dy="2.631191" result="offsetblur"></feOffset>
          <feFlood floodColor="#0cce6b" floodOpacity="0.777217"></feFlood>
          <feComposite in2="offsetblur" operator="in"></feComposite>
          <feMerge>
            <feMergeNode></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
        <path
          id="Path-copy-3"
          fill="none"
          stroke="#0cce6b"
          strokeWidth="47.971958"
          strokeLinecap="round"
          filter="url(#filter3)"
          d="M 777.880859 441.346008 L 556.22699 711.760254"
          className="svg-elem-3"
        ></path>
        <filter
          id="filter4"
          x="0"
          y="0"
          width="1000"
          height="1000"
          filterUnits="userSpaceOnUse"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="24.996316"></feGaussianBlur>
          <feOffset dx="-0" dy="2.631191" result="offsetblur"></feOffset>
          <feFlood floodColor="#3662e3" floodOpacity="0.674237"></feFlood>
          <feComposite in2="offsetblur" operator="in"></feComposite>
          <feMerge>
            <feMergeNode></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
        <path
          id="Path-copy-4"
          fill="none"
          stroke="#3662e3"
          strokeWidth="46.656364"
          strokeLinecap="round"
          filter="url(#filter4)"
          d="M 817.778259 527.051514 L 655.234314 711.762451"
          className="svg-elem-4"
        ></path>
        <filter
          id="filter5"
          x="0"
          y="0"
          width="1000"
          height="1000"
          filterUnits="userSpaceOnUse"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="40.783463"></feGaussianBlur>
          <feOffset dx="-2.577749" dy="0.527615" result="offsetblur"></feOffset>
          <feFlood floodColor="#ffffff" floodOpacity="0.5"></feFlood>
          <feComposite in2="offsetblur" operator="in"></feComposite>
          <feMerge>
            <feMergeNode></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
        <path
          id="Path-copy-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="36.131599"
          strokeLinecap="round"
          filter="url(#filter5)"
          d="M 841.421143 611.279297 L 751.283386 711.762329"
          className="svg-elem-5"
        ></path>
        <filter
          id="filter6"
          x="0"
          y="0"
          width="1000"
          height="1000"
          filterUnits="userSpaceOnUse"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="40.783463"></feGaussianBlur>
          <feOffset dx="-0" dy="2.631191" result="offsetblur"></feOffset>
          <feFlood floodColor="#ffffff" floodOpacity="0.5"></feFlood>
          <feComposite in2="offsetblur" operator="in"></feComposite>
          <feMerge>
            <feMergeNode></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
        <path
          id="Path-copy-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="36.131599"
          strokeLinecap="round"
          filter="url(#filter6)"
          d="M 858 685.157227 L 827.741211 718.046997"
          className="svg-elem-6"
        ></path>
        <filter
          id="filter7"
          x="0"
          y="0"
          width="1000"
          height="1000"
          filterUnits="userSpaceOnUse"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="36.836676"></feGaussianBlur>
          <feOffset dx="-0" dy="2.631191" result="offsetblur"></feOffset>
          <feFlood floodColor="#ffffff" floodOpacity="0.691642"></feFlood>
          <feComposite in2="offsetblur" operator="in"></feComposite>
          <feMerge>
            <feMergeNode></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
        <path
          id="Path-copy-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="45.646027"
          strokeLinecap="round"
          filter="url(#filter7)"
          d="M 455.584412 438.390747 L 245.753601 702.895508"
          className="svg-elem-7"
        ></path>
        <filter
          id="filter8"
          x="0"
          y="0"
          width="1000"
          height="1000"
          filterUnits="userSpaceOnUse"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="36.836676"></feGaussianBlur>
          <feOffset dx="-0" dy="2.631191" result="offsetblur"></feOffset>
          <feFlood floodColor="#ffffff" floodOpacity="0.5"></feFlood>
          <feComposite in2="offsetblur" operator="in"></feComposite>
          <feMerge>
            <feMergeNode></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
        <path
          id="Path-copy-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="43.520004"
          strokeLinecap="round"
          filter="url(#filter8)"
          d="M 343.440735 462.031067 L 140.999298 710.283081"
          className="svg-elem-8"
        ></path>
      </g>
    </svg>
  );
};

export default Icon;
