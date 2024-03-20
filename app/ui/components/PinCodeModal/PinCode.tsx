"use client";

import { rangeNumber } from "@/helpers";
import { Flex } from "@tremor/react";

import React, {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  createRef,
  forwardRef,
  memo,
  useCallback,
  useState,
} from "react";

import "./styles.css";

const DEFAULT_CODE = "*";

interface IPinCode {
  length?: number;
  onChange: (value: string) => void;
  value?: string;
}

export const PinCode = ({ length = 4, value, onChange }: IPinCode) => {
  const initValue =
    value ||
    rangeNumber(1, length)
      .map(() => DEFAULT_CODE)
      .join("");

  const [codes, setCodes] = useState(initValue);

  const refs = rangeNumber(1, length).map(() => createRef<HTMLInputElement>());

  const handleChange = useCallback(
    (value: string, index: number) => {
      const currentCodes =
        codes.substring(0, index) + value + codes.substring(index + 1);
      onChange(currentCodes.replaceAll("*", ""));
      setCodes(currentCodes);

      if (value === DEFAULT_CODE) {
        if (index > 0) {
          refs[index - 1].current?.focus();
        }

        return;
      }

      if (index < length - 1) {
        refs[index + 1].current?.focus();
        return;
      }

      refs[index].current?.blur();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [refs, codes],
  );

  return (
    <Flex className="gap-6 w-fit self-center">
      {refs.map((_, index) => (
        <PinCodeField
          ref={refs[index]}
          key={index}
          index={index}
          value={codes[index]}
          onChange={handleChange}
        />
      ))}
    </Flex>
  );
};

interface IPinCodeField {
  index: number;
  value?: string;
  onChange: (value: string, index: number) => void;
}

const PinCodeField = memo(
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
