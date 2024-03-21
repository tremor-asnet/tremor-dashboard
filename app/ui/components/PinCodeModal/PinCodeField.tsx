import { DEFAULT_CODE } from "@/constants";
import { ChangeEvent, KeyboardEvent, forwardRef, memo, useState } from "react";

interface IPinCodeField {
  index: number;
  value?: string;
  onChange: (value: string, index: number) => void;
}

export const PinCodeField = memo(
  forwardRef<HTMLInputElement, IPinCodeField>(
    ({ index, value = "", onChange }, ref) => {
      const [currentValue, setCurrentValue] = useState(value);

      const handleFocus = () => {
        setCurrentValue("");
      };

      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value, index);
        setCurrentValue(e.target.value);
      };

      const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Backspace") {
          e.preventDefault();
          onChange(DEFAULT_CODE, index);
          setCurrentValue("");
          return;
        }

        if (e.code.includes("Digit")) {
          return;
        }

        e.preventDefault();
      };

      const handleBlur = () => {
        setCurrentValue(value);
      };

      const isSecurity = currentValue !== DEFAULT_CODE && currentValue !== "";

      return (
        <input
          ref={ref}
          value={currentValue}
          autoFocus={index === 0}
          type={isSecurity ? "password" : "number"}
          inputMode="numeric"
          placeholder="○"
          min="0"
          max="9"
          className="w-10 h-10 border-2 rounded-md outline-none border-secondary focus:border-[3px] focus:border-tremor-secondary text-center font-bold text-2xl text-secondary placeholder-secondary focus:placeholder-transparent"
          onFocus={handleFocus}
          onChange={handleChange}
          onKeyDown={handleKeydown}
          onBlur={handleBlur}
        />
      );
    },
  ),
);

PinCodeField.displayName = "PinCodeField";
