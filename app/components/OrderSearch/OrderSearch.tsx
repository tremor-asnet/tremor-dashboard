import { Flex, TextInput } from "@tremor/react";

const OrderSearch = () => (
  <Flex className="p-6 items-start justify-end">
    <TextInput id="search_order" className="w-auto" placeholder="Search..." />
  </Flex>
);

export default OrderSearch;
