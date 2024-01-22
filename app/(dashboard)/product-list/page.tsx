"use client";

// Components
import { TableList, InputSearch } from "@/components";
import { Button, Flex, Text } from "@tremor/react";

// Icons
import { RiArrowDropDownLine } from "react-icons/ri";

// Mocks
import { TABLE_LIST_DATA } from "@/mocks";

const ProductListPage = () => {
  const handleSearch = () => {
    // TODO: Handle search here
  };

  const handleCheckBox = () => {
    // TODO: Handle check box here
  };

  return (
    <Flex flexDirection="col" className="gap-4">
      <Flex>
        <Button className="py-3 px-5 bg-gradient-primary dark:bg-gradient-pickled border-none dark:text-white">
          <Text className="uppercase text-xs text-white dark:text-white">
            new product
          </Text>
        </Button>
        <Button
          icon={RiArrowDropDownLine}
          iconPosition="right"
          className="font-bold bg-transparent border-primary focus:border-primary hover:border-primary focus:opacity-75 hover:opacity-75 text-primary focus:text-white dark:text-dark-tremor-content-title hover:bg-transparent active:bg-primary focus:bg-primary rounded-lg hover:!shadow-btn-primary-hover dark:border-primary dark:bg-transparent dark:hover:border-primary dark:hover:bg-transparent">
          <Text className="uppercase text-xs">Filters</Text>
        </Button>
      </Flex>
      <div className="w-full bg-white rounded-lg dark:bg-dark-tremor-primary">
        <InputSearch onSearch={handleSearch} />
        <TableList data={TABLE_LIST_DATA} />
      </div>
    </Flex>
  );
};

export default ProductListPage;
