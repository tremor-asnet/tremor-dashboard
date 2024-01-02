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
  const labelPrimary =
    "label-primary peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:px-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4";
  const labelSecondary =
    "label-secondary peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:start-0 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto";
  const labelWithError = "text-red-600 peer-focus:text-red-600";
  const labelWithoutError =
    "text-tremor-content peer-focus:text-tremor-content-title";

  const inputPrimaryClasses = `input-primary peer ${
    !errorMessage ? "input-primary-without-error" : "input-primary-with-error"
  }`;

  const inputSecondaryClasses = `input-secondary peer ${
    !errorMessage
      ? "input-secondary-without-error"
      : "input-secondary-with-error"
  }`;

  const labelPrimaryClasses = `${labelPrimary} ${
    !errorMessage ? labelWithoutError : labelWithError
  }`;

  const labelSecondaryClasses = `${labelSecondary} ${
    !errorMessage ? labelWithoutError : labelWithError
  }`;

  return (
    <>
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
    </>
  );
};

export default memo(FormInput);
