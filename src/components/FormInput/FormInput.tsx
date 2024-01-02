// TODO: Implement Unit Testing

import { HTMLInputTypeAttribute, memo } from "react";

// Define the props for the Input component
interface FormInputProps {
  type: HTMLInputTypeAttribute;
  variant: "primary" | "secondary";
  id: string;
  ariaDescribedby?: string;
  placeholder: string;
  label: string;
  htmlFor?: string;
  errorMessage?: string;
  disabled?: boolean;
}

/**
 * Primary UI component for Input component
 */
const FormInput = ({
  type,
  id,
  ariaDescribedby,
  placeholder,
  label = "User Name",
  variant,
  disabled,
  errorMessage,
  ...props
}: FormInputProps): JSX.Element => {
  const inputPrimaryClasses = `input-primary peer ${
    !errorMessage ? "input-primary-without-error" : "input-primary-with-error"
  }`;

  const inputSecondaryClasses = `input-secondary peer ${
    !errorMessage
      ? "input-secondary-without-error"
      : "input-secondary-with-error"
  }`;

  const labelPrimaryClasses = `label-primary ${
    !errorMessage ? "label-without-error" : "label-with-error"
  }`;

  const labelSecondaryClasses = `label-secondary ${
    !errorMessage ? "label-without-error" : "label-with-error"
  }`;

  return (
    <div>
      <div className="relative">
        <input
          disabled={disabled}
          type={type}
          id={id}
          placeholder={placeholder}
          className={`${
            variant === "primary" ? inputPrimaryClasses : inputSecondaryClasses
          }`}
          aria-describedby={ariaDescribedby}
          {...props}
        />
        <label
          htmlFor={id}
          className={`${
            variant === "primary" ? labelPrimaryClasses : labelSecondaryClasses
          }`}
          data-testid="label">
          {label}
        </label>
      </div>

      {errorMessage && (
        <p className="mt-2 text-xs text-red-600">{errorMessage}</p>
      )}
    </div>
  );
};

export default memo(FormInput);
