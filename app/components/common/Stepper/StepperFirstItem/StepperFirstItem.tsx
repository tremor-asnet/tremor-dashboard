"use client";

// Libs
import { memo } from "react";

// Types
import { Step } from "@/types";

interface StepperFirstItemProps {
  isFirstStep: boolean;
  step: Step;
}

const StepperFirstItem = ({ isFirstStep, step }: StepperFirstItemProps) => {
  const firstItemRightLineClass = `h-0.5 w-full ${
    isFirstStep ? "bg-zinc-400" : "bg-white"
  }`;

  return (
    <li>
      <div className="flex items-center w-full h-4 pl-[50%]">
        <span className="stepper-dot-active"></span>
        <span className={firstItemRightLineClass}></span>
      </div>
      <p className="stepper-text-content text-white mt-2">{`${step.index}. ${step.content}`}</p>
    </li>
  );
};

export default memo(StepperFirstItem);
