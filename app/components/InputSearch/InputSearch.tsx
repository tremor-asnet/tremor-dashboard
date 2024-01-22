"use client";

import { Flex, TextInput } from "@tremor/react";

const InputSearch = () => {
  const handleSearch = () => {
    // TODO: Handle Search
  };

  return (
    <Flex className="p-6 items-start justify-end">
      <TextInput
        id="search_order"
        className="w-auto dark:bg-transparent dark:border-white"
        onChange={handleSearch}
        placeholder="Search..."
      />
    </Flex>
  );
};

export default InputSearch;
