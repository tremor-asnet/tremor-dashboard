// Components
import { Button, Flex } from "@tremor/react";

// Icons
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

// Types
import { SortItem } from "../Table/TableProduct/TableProduct";

// Constants
import { DIRECTION } from "@/constants/common";

export interface HeaderCellContentsProps {
  title: string;
  sortItem?: SortItem;
  keyColumn?: string;
  hasSort?: boolean;
}

const HeaderCellContents = ({
  title,
  sortItem = { direction: "", key: "" },
  keyColumn,
  hasSort = true,
}: HeaderCellContentsProps) => {
  const { direction, key } = sortItem as SortItem;

  const fillUp =
    direction === DIRECTION.ASC && key === keyColumn
      ? "text-test"
      : "fill-secondary";

  const fillDown =
    direction === DIRECTION.DESC && key === keyColumn
      ? "text-test"
      : "fill-secondary";

  return (
    <Flex>
      <Flex>{title}</Flex>
      {hasSort && (
        <Flex className="relative flex-col ml-4">
          <Flex className="absotule top-0 justify-end">
            <Button
              className="w-1.5 h-1.5 justify-center items-center opacity-50 dark:opacity-100"
              variant="light">
              <MdArrowDropUp className={`w-4 h-4 ${fillUp}`} />
            </Button>
          </Flex>
          <Flex className="absotule top-0 justify-end">
            <Button
              className="w-1.5 h-1.5 justify-center items-center opacity-50 dark:opacity-100"
              variant="light">
              <MdArrowDropDown className={`w-4 h-4 ${fillDown}`} />
            </Button>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default HeaderCellContents;
