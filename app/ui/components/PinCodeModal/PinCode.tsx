"use client";

import React, { createRef, useCallback, useMemo } from "react";

import { Flex } from "@tremor/react";
import { PinCodeField } from "./PinCodeField";

import { rangeNumber } from "@/helpers";

import { DEFAULT_PIN_CODE, PIN_CODE_LENGTH } from "@/constants";

import { formatPinCode } from "@/utils";

interface IPinCode {
  length?: number;
  onChange: (value: string) => void;
  value?: string;
}

export const PinCode = ({
  length = PIN_CODE_LENGTH,
  value,
  onChange,
}: IPinCode) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const codes = useMemo(() => formatPinCode({ length, codes: value }), [value]);

  const refs = rangeNumber(1, length).map(() => createRef<HTMLInputElement>());

  const handleChange = useCallback(
    (value: string, index: number) => {
      const currentCodes = formatPinCode({ codes, index, value });
      onChange(currentCodes);

      if (value === DEFAULT_PIN_CODE) {
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
    [refs, codes, onchange],
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
