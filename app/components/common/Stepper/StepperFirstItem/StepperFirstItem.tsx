"use client";

// Libs
import { memo } from "react";

interface StepperFirstItemProps {
  isFirstStep: boolean;
  content: string;
}

const StepperFirstItem = ({ isFirstStep, content }: StepperFirstItemProps) => {
  const firstItemRightLineClass = `h-0.5 w-full ${
    isFirstStep ? "bg-zinc-400" : "bg-white"
  }`;

  return (
    <li>
      <div className="flex items-center w-full h-4 pl-[50%]">
        <span className="stepper-dot-active"></span>
        <span className={firstItemRightLineClass}></span>
      </div>
      <p className="stepper-text-content text-white mt-2">{content}</p>
    </li>
  );
};

export default memo(StepperFirstItem);
