// Components
import { Button, Flex } from "@tremor/react";

// Icons
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

// Constants
import { DIRECTION } from "@/constants/common";
import { VARIANT_BUTTON } from "@/constants";

export interface HeaderCellContentsProps {
  title: string;
  keyColumn?: string;
  sortKey?: string;
  sortDirection?: string;
  sortable?: boolean;
}

const HeaderCellContents = ({
  title,
  keyColumn,
  sortKey,
  sortDirection,
  sortable = true,
}: HeaderCellContentsProps) => {
  const activeFill = "text-primary";
  const inActiveFill = "fill-secondary";

  const checkFill = (type: string) => {
    switch (type) {
      case DIRECTION.ASC:
        return sortDirection === DIRECTION.ASC && sortKey === keyColumn
          ? activeFill
          : inActiveFill;

      case DIRECTION.DESC:
        return sortDirection === DIRECTION.DESC && sortKey === keyColumn
          ? activeFill
          : inActiveFill;

      default:
        return "";
    }
  };

  return (
    <Flex>
      <Flex>{title}</Flex>
      {sortable && (
        <Flex flexDirection="col" className="relative ml-4 -mt-6">
          <Flex justifyContent="end" className="absolute top-0">
            <Button
              className="justify-center items-center opacity-50 dark:opacity-100"
              variant={VARIANT_BUTTON.LIGHT}>
              <MdArrowDropUp
                className={`w-4 h-4 ${checkFill(DIRECTION.ASC)}`}
              />
            </Button>
          </Flex>
          <Flex justifyContent="end" className="absolute top-1.5">
            <Button
              className="justify-center items-center opacity-50 dark:opacity-100"
              variant={VARIANT_BUTTON.LIGHT}>
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
