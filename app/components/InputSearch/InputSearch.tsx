import { Flex, TextInput } from "@tremor/react";

interface InputSearchProps {
  onSearch: () => void;
}

const OrderSearch = ({ onSearch }: InputSearchProps) => (
  <Flex className="p-6 items-start justify-end">
    <TextInput
      id="search_order"
      className="w-auto"
      onChange={onSearch}
      placeholder="Search..."
    />
  </Flex>
);

export default OrderSearch;
