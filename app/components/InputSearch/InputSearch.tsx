import { Flex, TextInput } from "@tremor/react";

interface InputSearchProps {
  onSearch: () => void;
}

const InputSearch = ({ onSearch }: InputSearchProps) => (
  <Flex className="p-6 items-start justify-end">
    <TextInput
      id="search_order"
      className="w-auto dark:bg-transparent dark:border-white"
      onChange={onSearch}
      placeholder="Search..."
    />
  </Flex>
);

export default InputSearch;
