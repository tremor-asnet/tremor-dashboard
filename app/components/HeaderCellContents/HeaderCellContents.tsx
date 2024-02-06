// Components
import { Button, Flex } from "@tremor/react";

// Icons
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

// Types
import { SortItem } from "../Table/TableProduct/TableProduct";

export interface HeaderCellContentsProps {
  title: string;
  sortItem?: SortItem;
  keyColumn?: string;
}

const HeaderCellContents = ({
  title,
  sortItem = { direction: "", key: "" },
  keyColumn,
}: HeaderCellContentsProps) => {
  const { direction, key } = sortItem as SortItem;

  const isFillUp =
    direction === "asc" && key === keyColumn ? "text-test" : "fill-secondary";

  const isFillDown =
    direction === "desc" && key === keyColumn ? "text-test" : "fill-secondary";

  return (
    <Flex>
      <Flex>{title}</Flex>
      <Flex className="relative flex-col ml-4">
        <Flex className="absotule top-0 justify-end">
          <Button
            className="w-1.5 h-1.5 justify-center items-center opacity-50 dark:opacity-100"
            variant="light">
            <MdArrowDropUp className={`w-4 h-4 ${isFillUp}`} />
          </Button>
        </Flex>
        <Flex className="absotule top-0 justify-end">
          <Button
            className="w-1.5 h-1.5 justify-center items-center opacity-50 dark:opacity-100"
            variant="light">
            <MdArrowDropDown className={`w-4 h-4 ${isFillDown}`} />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeaderCellContents;
