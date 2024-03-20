import { ReactNode } from "react";

// Components
import { Button as ButtonTremor, Size } from "@tremor/react";

// Constant
import { VARIANT_BUTTON } from "@/constants";

interface ButtonProps {
  variant:
    | VARIANT_BUTTON.PRIMARY
    | VARIANT_BUTTON.SECONDARY
    | VARIANT_BUTTON.LIGHT;
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
