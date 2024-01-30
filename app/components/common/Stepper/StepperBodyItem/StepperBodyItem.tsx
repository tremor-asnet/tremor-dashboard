"use client";

// Libs
import { memo } from "react";

// Types
import { Step } from "@/types";

interface StepperBodyItemProps {
  currentStep: number;
  step: Step;
}

const StepperBodyItem = ({ currentStep, step }: StepperBodyItemProps) => {
  const stepIndex = step.index;
  const leftLineClass = `h-0.5 w-[50%] ${
    currentStep >= stepIndex ? "bg-white" : "bg-zinc-400"
  }`;
  const dotClass =
    currentStep >= stepIndex ? "stepper-dot-active" : "stepper-dot";
  const rightLineClass = `h-0.5 w-[50%] ${
    currentStep > stepIndex ? "bg-white" : "bg-zinc-400"
  }`;
  const textClass = `stepper-text-content mt-2 ${
    currentStep >= stepIndex ? "text-white" : "text-zinc-400"
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
      <p className={textClass}>{`${step.index}. ${step.content}`}</p>
    </li>
  );
};

export default memo(StepperBodyItem);
