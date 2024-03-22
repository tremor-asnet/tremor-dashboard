import { ElementType, ReactNode } from "react";

// Components
import {
  Button as ButtonTremor,
  ButtonVariant,
  HorizontalPosition,
  Size,
} from "@tremor/react";

// Constant
import { VARIANT_BUTTON } from "@/constants";

interface ButtonProps {
  variant?:
    | VARIANT_BUTTON.PRIMARY
    | VARIANT_BUTTON.PRIMARY_CENTER
    | VARIANT_BUTTON.SECONDARY
    | VARIANT_BUTTON.SECONDARY_SHADOW
    | VARIANT_BUTTON.LIGHT
    | VARIANT_BUTTON.LIGHT_CARD
    | VARIANT_BUTTON.LIGHT_STATUS
    | VARIANT_BUTTON.LIGHT_CENTER
    | VARIANT_BUTTON.SURFACE
    | "";
  variantTremor?: ButtonVariant;
  additionalClass?: string;
  icon?: ElementType;
  iconPosition?: HorizontalPosition;
  children?: string | ReactNode;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  size?: Size;
  tabIndex?: number;
  onClick?: () => void;
}

const Button = ({
  additionalClass = "",
  variant = "",
  variantTremor,
  icon,
  iconPosition,
  children,
  disabled,
  type,
  size,
  tabIndex,
  onClick,
  ...otherProps
}: ButtonProps) => {
  const renderTypeVariant = (variant: string) => {
    switch (variant) {
      case VARIANT_BUTTON.PRIMARY:
        return "bg-gradient-primary dark:bg-gradient-pickled";

      case VARIANT_BUTTON.SURFACE:
        return "items-start btn-form-secondary rounded-lg dark:bg-gradient-pickled py-3 px-6 mt-8 bg-gradient-btn-back hover:dark:!bg-gradient-pickled border-none dark:text-white text-center box-shadow-transparent";

      case VARIANT_BUTTON.PRIMARY_CENTER:
        return "btn-form-primary rounded-lg py-3 px-6 mt-8 bg-gradient-primary dark:bg-gradient-pickled hover:dark:!bg-gradient-pickled border-none dark:text-white text-center";

      case VARIANT_BUTTON.SECONDARY:
        return "!rounded-full border-secondary dark:border-secondary text-secondary hover:text-secondary hover:opacity-75 hover:bg-transparent p-[5.5px] box-shadow-transparent";

      case VARIANT_BUTTON.SECONDARY_SHADOW:
        return "box-shadow-transparent uppercase";

      case VARIANT_BUTTON.LIGHT_CARD:
        return "justify-start text-tremor-content-title hover:text-tremor-content-title hover:bg-body dark:hover:bg-dark-secondary hover:rounded-md";

      case VARIANT_BUTTON.LIGHT_CENTER:
        return "justify-center items-center opacity-50 dark:opacity-100";

      case VARIANT_BUTTON.LIGHT_STATUS:
        return "w-[25px] h-[25px] justify-center items-center rounded-full border border mr-2 text-tremor-content-title hover:text-tremor-content-title";

      default:
        return "";
    }
  };

  return (
    <ButtonTremor
      className={`${renderTypeVariant(variant)} ${additionalClass}`}
      variant={variantTremor}
      icon={icon}
      iconPosition={iconPosition}
      tabIndex={tabIndex}
      size={size}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...otherProps}>
      {children}
    </ButtonTremor>
  );
};

export default Button;
