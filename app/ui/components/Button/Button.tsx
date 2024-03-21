import { ReactNode } from "react";

// Components
import { Button as ButtonTremor, Size } from "@tremor/react";

// Constant
import { VARIANT_BUTTON } from "@/constants";

interface ButtonProps {
  variant:
    | VARIANT_BUTTON.PRIMARY
    | VARIANT_BUTTON.PRIMARY_CENTER
    | VARIANT_BUTTON.SECONDARY
    | VARIANT_BUTTON.LIGHT
    | VARIANT_BUTTON.SURFACE;
  additionalClass?: string;
  children?: string | ReactNode;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  size?: Size;
  tabIndex?: number;
  onClick?: () => void;
}

const Button = ({
  additionalClass,
  variant,
  children,
  disabled,
  type,
  size,
  tabIndex,
  onClick,
}: ButtonProps) => {
  const renderTypeVariant = (variant: string) => {
    switch (variant) {
      case VARIANT_BUTTON.PRIMARY:
        return "bg-gradient-primary dark:bg-gradient-pickled";

      case VARIANT_BUTTON.SURFACE:
        return "items-start btn-form-secondary rounded-lg dark:bg-gradient-pickled py-3 px-6 mt-8 bg-gradient-btn-back hover:dark:!bg-gradient-pickled border-none dark:text-white text-center box-shadow-transparent";

      case VARIANT_BUTTON.PRIMARY_CENTER:
        return "btn-form-primary rounded-lg py-3 px-6 mt-8 bg-gradient-primary dark:bg-gradient-pickled hover:dark:!bg-gradient-pickled border-none dark:text-white text-center";

      // TODO: Collect style later
      case VARIANT_BUTTON.SECONDARY:
        return "";

      // TODO: Collect style later
      case VARIANT_BUTTON.LIGHT:
        return "";

      default:
        return "";
    }
  };

  return (
    <ButtonTremor
      className={`${renderTypeVariant(variant)} ${additionalClass}`}
      tabIndex={tabIndex}
      size={size}
      type={type}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </ButtonTremor>
  );
};

export default Button;
