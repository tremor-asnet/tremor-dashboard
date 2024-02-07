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
  sortField?: SortItem;
  keyColumn?: string;
  hasSort?: boolean;
}

const HeaderCellContents = ({
  title,
  sortField = { direction: "", key: "" },
  keyColumn,
  hasSort = true,
}: HeaderCellContentsProps) => {
  const { direction, key } = sortField as SortItem;
  const activeFill = "text-test";
  const inActiveFill = "fill-secondary";

  const checkFill = (type: string) => {
    switch (type) {
      case DIRECTION.ASC:
        return direction === DIRECTION.ASC && key === keyColumn
          ? activeFill
          : inActiveFill;

      case DIRECTION.DESC:
        return direction === DIRECTION.DESC && key === keyColumn
          ? activeFill
          : inActiveFill;

      default:
        return "";
    }
  };

  return (
    <Flex>
      <Flex>{title}</Flex>
      {hasSort && (
        <Flex className="relative flex-col ml-4">
          <Flex className="absotule top-0 justify-end">
            <Button
              className="w-1.5 h-1.5 justify-center items-center opacity-50 dark:opacity-100"
              variant="light">
              <MdArrowDropUp
                className={`w-4 h-4 ${checkFill(DIRECTION.ASC)}`}
              />
            </Button>
          </Flex>
          <Flex className="absotule top-0 justify-end">
            <Button
              className="w-1.5 h-1.5 justify-center items-center opacity-50 dark:opacity-100"
              variant="light">
              <MdArrowDropDown
                className={`w-4 h-4 ${checkFill(DIRECTION.DESC)}`}
              />
            </Button>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default HeaderCellContents;
