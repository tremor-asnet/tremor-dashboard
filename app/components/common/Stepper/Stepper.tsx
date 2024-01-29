interface StepperProps {
  currentStep: number;
  steps: string[];
}

const Stepper = ({ currentStep, steps }: StepperProps) => {
  const stepsLength = steps.length;

  return (
    <ul
      className={`grid grid-cols-${stepsLength} pt-6 pb-4 bg-zinc-700 dark:stepper-dark-bg rounded-lg`}>
      {/* First Items */}
      <li>
        <div className="flex items-center w-full h-4 pl-[50%]">
          <span className="stepper-dot-active rounded-full"></span>
          <span
            className={`h-0.5 w-full ${
              currentStep === 1 ? "bg-zinc-400" : "bg-white"
            }`}></span>
        </div>
        <p className="stepper-text-content text-white mt-2">1. {steps[0]}</p>
      </li>
      {/* Body items */}
      {stepsLength > 2
        ? steps.slice(1, stepsLength - 1).map((step, idx) => {
            const itemStepIndex = idx + 2;

            return (
              <li key={step}>
                <div className="flex items-center w-full h-4">
                  {/* Left line */}
                  <span
                    className={`h-0.5 w-[50%] ${
                      currentStep >= itemStepIndex ? "bg-white" : "bg-zinc-400"
                    }`}></span>
                  {/* Dot */}
                  <span
                    className={`${
                      currentStep >= itemStepIndex
                        ? "stepper-dot-active"
                        : "stepper-dot"
                    } rounded-full`}></span>
                  {/* Right line */}
                  <span
                    className={`h-0.5 w-[50%] ${
                      currentStep > itemStepIndex ? "bg-white" : "bg-zinc-400"
                    }`}></span>
                </div>
                <p
                  className={`stepper-text-content mt-2 ${
                    currentStep >= itemStepIndex
                      ? "text-white"
                      : "text-zinc-400"
                  }`}>
                  {itemStepIndex}. {steps[idx + 1]}
                </p>
              </li>
            );
          })
        : null}
      {/* Last Item */}
      <li>
        <div className="flex items-center w-full h-4">
          <span
            className={`h-0.5 w-[50%] ${
              currentStep === stepsLength ? "bg-white" : "bg-zinc-400"
            }`}></span>
          <span
            className={`rounded-full ${
              currentStep === stepsLength ? "stepper-dot-active" : "stepper-dot"
            }`}></span>
        </div>
        <p
          className={`stepper-text-content mt-2 ${
            currentStep === steps.length ? "text-white" : "text-zinc-400"
          }`}>
          {stepsLength}. {steps[stepsLength - 1]}
        </p>
      </li>
    </ul>
  );
};

export default Stepper;
