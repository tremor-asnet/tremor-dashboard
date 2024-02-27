// Components
import StepperBodyItem from "@/components/common/Stepper/StepperBodyItem/StepperBodyItem";
import StepperFirstItem from "@/components/common/Stepper/StepperFirstItem/StepperFirstItem";
import StepperLastItem from "@/components/common/Stepper/StepperLastItem/StepperLastItem";

// Types
import { Step } from "@/types";

interface StepperProps {
  currentStep: number;
  steps: Step[];
  total: number;
  extendClass?: string;
}

const Stepper = ({ currentStep, steps, total, extendClass }: StepperProps) => {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === total;
  const firstStep = steps[0];
  const lastStep = steps[total - 1];
  const bodySteps = steps.slice(1, total - 1);

  const bodyItems = bodySteps.map(step => {
    return (
      <StepperBodyItem
        key={step.content}
        currentStep={currentStep}
        step={step}
      />
    );
  });

  return (
    <ul
      className={`grid grid-cols-${total} pt-6 pb-4 bg-zinc-700 dark:stepper-dark-bg shadow-box-icon-primary rounded-lg ${extendClass}`}>
      {/* First Item */}
      <StepperFirstItem isFirstStep={isFirstStep} step={firstStep} />
      {/* Body Items */}
      {bodyItems}
      {/* Last Item */}
      <StepperLastItem isLastStep={isLastStep} step={lastStep} />
    </ul>
  );
};

export default Stepper;
