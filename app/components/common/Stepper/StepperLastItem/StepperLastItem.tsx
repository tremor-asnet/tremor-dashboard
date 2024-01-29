"use client";

// Libs
import { memo } from "react";

interface StepperLastItemProps {
  isLastStep: boolean;
  content: string;
}

const StepperLastItem = ({ isLastStep, content }: StepperLastItemProps) => {
  const lastItemLeftLineClass = `h-0.5 w-[50%] ${
    isLastStep ? "bg-white" : "bg-zinc-400"
  }`;
  const lastItemDotClass = isLastStep ? "stepper-dot-active" : "stepper-dot";
  const lastItemTextClass = `stepper-text-content mt-2 ${
    isLastStep ? "text-white" : "text-zinc-400"
  }`;

  return (
    <li>
      <div className="flex items-center w-full h-4">
        <span className={lastItemLeftLineClass}></span>
        <span className={lastItemDotClass}></span>
      </div>
      <p className={lastItemTextClass}>{content}</p>
    </li>
  );
};

export default memo(StepperLastItem);
