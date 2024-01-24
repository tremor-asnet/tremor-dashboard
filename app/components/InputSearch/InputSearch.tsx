"use client";

import { Flex, TextInput } from "@tremor/react";
interface InputSearchProps {
  onChange: () => void;
}

const InputSearch = ({ onChange }: InputSearchProps) => (
  <Flex className="p-6 items-start justify-end">
    <TextInput
      id="search_order"
      className="w-auto dark:bg-transparent dark:border-white"
      onChange={onChange}
      placeholder="Search..."
    />
  </Flex>
);

export default InputSearch;
