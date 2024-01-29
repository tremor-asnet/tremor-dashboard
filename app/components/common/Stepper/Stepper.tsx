// Components
import StepperBodyItem from "./StepperBodyItem/StepperBodyItem";
import StepperFirstItem from "./StepperFirstItem/StepperFirstItem";
import StepperLastItem from "./StepperLastItem/StepperLastItem";

interface StepperProps {
  currentStep: number;
  steps: string[];
  total: number;
}

const Stepper = ({ currentStep, steps, total }: StepperProps) => {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === total;
  const lastStepContent = `${total}. ${steps[total - 1]}`;

  const bodyItems =
    total > 2
      ? steps.slice(1, total - 1).map((step, idx) => {
          const itemStepIndex = idx + 2;
          const content = `${idx + 2}. ${step}`;

          return (
            <StepperBodyItem
              key={step}
              currentStep={currentStep}
              itemStep={itemStepIndex}
              content={content}
            />
          );
        })
      : null;

  return (
    <ul
      className={`grid grid-cols-${total} pt-6 pb-4 bg-zinc-700 dark:stepper-dark-bg rounded-lg`}>
      {/* First Item */}
      <StepperFirstItem isFirstStep={isFirstStep} content={`1. ${steps[0]}`} />
      {/* Body Items */}
      {bodyItems}
      {/* Last Item */}
      <StepperLastItem isLastStep={isLastStep} content={lastStepContent} />
    </ul>
  );
};

export default Stepper;
