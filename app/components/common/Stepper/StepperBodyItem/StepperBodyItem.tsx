"use client";

// Libs
import { memo } from "react";

interface StepperBodyItemProps {
  currentStep: number;
  itemStep: number;
  content: string;
}

const StepperBodyItem = ({
  currentStep,
  itemStep,
  content,
}: StepperBodyItemProps) => {
  const leftLineClass = `h-0.5 w-[50%] ${
    currentStep >= itemStep ? "bg-white" : "bg-zinc-400"
  }`;
  const dotClass =
    currentStep >= itemStep ? "stepper-dot-active" : "stepper-dot";
  const rightLineClass = `h-0.5 w-[50%] ${
    currentStep > itemStep ? "bg-white" : "bg-zinc-400"
  }`;
  const textClass = `stepper-text-content mt-2 ${
    currentStep >= itemStep ? "text-white" : "text-zinc-400"
  }`;

  return (
    <li>
      <div className="flex items-center w-full h-4">
        {/* Left line */}
        <span className={leftLineClass}></span>
        {/* Dot */}
        <span className={dotClass}></span>
        {/* Right line */}
        <span className={rightLineClass}></span>
      </div>
      <p className={textClass}>{content}</p>
    </li>
  );
};

export default memo(StepperBodyItem);
