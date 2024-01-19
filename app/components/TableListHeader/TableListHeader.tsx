// Components
import { Button, Flex } from "@tremor/react";

// Icons
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

export interface TableListHeaderProps {
  title: string;
}

const TableListHeader = ({ title }: TableListHeaderProps) => (
  <Flex>
    <Flex>{title}</Flex>
    <Flex className="relative flex-col">
      <Flex className="absotule top-0 justify-end">
        <Button
          className="w-1.5 h-1.5 justify-center items-center opacity-50 dark:opacity-100"
          variant="light">
          <MdArrowDropUp className="w-4 h-4" />
        </Button>
      </Flex>
      <Flex className="absotule top-0 justify-end">
        <Button
          className="w-1.5 h-1.5 justify-center items-center opacity-50 dark:opacity-100"
          variant="light">
          <MdArrowDropDown className="w-4 h-4" />
        </Button>
      </Flex>
    </Flex>
  </Flex>
);

export default TableListHeader;
