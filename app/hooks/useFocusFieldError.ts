import { useEffect } from "react";

const useFocusFieldError = (formState: any) => {
  useEffect(() => {
    const { errors } = formState;

    const errorField = Object.keys(errors).find(key => !!errors[key]?.message);
    const errorFieldElement = errorField
      ? document.getElementsByName(errorField)
      : [];

    if (errorFieldElement.length) {
      errorFieldElement[0].focus();
    }
  }, [formState]);
};

export default useFocusFieldError;
