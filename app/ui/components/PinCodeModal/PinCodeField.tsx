"use client";

import {
  ChangeEvent,
  KeyboardEvent,
  forwardRef,
  memo,
  useEffect,
  useState,
} from "react";

import { DEFAULT_PIN_CODE } from "@/constants";

import "./styles.css";

interface IPinCodeField {
  index: number;
  value?: string;
  onChange: (value: string, index: number) => void;
}

export const PinCodeField = memo(
  forwardRef<HTMLInputElement, IPinCodeField>(
    ({ index, value = "", onChange }, ref) => {
      const [currentValue, setCurrentValue] = useState(value);

      useEffect(() => {
        setCurrentValue(value);
      }, [value]);

      // Auto clear when focus
      const handleFocus = () => {
        setCurrentValue("");
      };

      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        onChange(value, index);
        setCurrentValue(value);
      };

      const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Backspace") {
          e.preventDefault();
          onChange(DEFAULT_PIN_CODE, index);
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

      const isSecurity = currentValue !== DEFAULT_PIN_CODE && !!currentValue;

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
          className="w-10 h-10 border-2 rounded-md outline-none border-secondary focus:border-[3px] focus:border-tremor-secondary text-center font-bold text-2xl text-secondary placeholder-secondary focus:placeholder-transparent dark:bg-transparent dark:text-white dark:border-white focus:dark:border-tremor-secondary dark:placeholder-white focus:dark:placeholder-transparent"
          onFocus={handleFocus}
          onChange={handleChange}
          onKeyDown={handleKeydown}
          onBlur={handleBlur}
        />
      );
    },
  ),
);
