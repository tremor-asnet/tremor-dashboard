// Components
import { Flex } from "@tremor/react";
import { Button } from "..";

// Icons
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

// Constants
import { VARIANT_BUTTON, DIRECTION } from "@/constants";

export interface HeaderCellContentsProps {
  title: string;
  keyColumn?: string;
  sortField?: string;
  sortType?: string;
  isSortable: boolean;
}

const HeaderCellContents = ({
  title,
  keyColumn,
  sortField,
  sortType,
  isSortable = false,
}: HeaderCellContentsProps) => {
  const activeFill = "text-primary";
  const inActiveFill = "fill-secondary";

  const checkFill = (type: string) => {
    switch (type) {
      case DIRECTION.ASC:
        return sortType === DIRECTION.ASC && sortField === keyColumn
          ? activeFill
          : inActiveFill;

      case DIRECTION.DESC:
        return sortType === DIRECTION.DESC && sortField === keyColumn
          ? activeFill
          : inActiveFill;

      default:
        return "";
    }
  };

  return (
    <Flex>
      <Flex>{title}</Flex>
      {isSortable && (
        <Flex flexDirection="col" className="relative ml-4 -mt-6">
          <Flex justifyContent="end" className="absolute top-0">
            <Button
              variantTremor={VARIANT_BUTTON.LIGHT}
              variant={VARIANT_BUTTON.LIGHT_CENTER}>
              <MdArrowDropUp
                className={`w-4 h-4 ${checkFill(DIRECTION.ASC)}`}
              />
            </Button>
          </Flex>
          <Flex justifyContent="end" className="absolute top-1.5">
            <Button
              variantTremor={VARIANT_BUTTON.LIGHT}
              variant={VARIANT_BUTTON.LIGHT_CENTER}>
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
