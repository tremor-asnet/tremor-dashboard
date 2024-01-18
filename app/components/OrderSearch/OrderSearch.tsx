import { Flex, TextInput } from "@tremor/react";

interface InputSearchProps {
  handleSearch: () => void;
}

const OrderSearch = ({ handleSearch }: InputSearchProps) => (
  <Flex className="p-6 items-start justify-end">
    <TextInput
      id="search_order"
      className="w-auto"
      onChange={handleSearch}
      placeholder="Search..."
    />
  </Flex>
);

export default OrderSearch;
