"use client";

import React, { createRef, useCallback, useMemo, useState } from "react";

import { Flex } from "@tremor/react";
import { PinCodeField } from "./PinCodeField";

import { rangeNumber } from "@/helpers";

import { DEFAULT_CODE } from "@/constants";

interface IPinCode {
  length?: number;
  onChange: (value: string) => void;
  value?: string;
}

export const PinCode = ({ length = 4, value, onChange }: IPinCode) => {
  const initValue = useMemo(
    () => value || Array(length).fill(DEFAULT_CODE).join(""),
    [length, value],
  );

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
