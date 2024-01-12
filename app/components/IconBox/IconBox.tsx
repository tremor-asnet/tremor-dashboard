//Libs
import { ReactNode } from "react";

//Components
import { Flex } from "@tremor/react";
import { IoMdPrint } from "react-icons/io";

interface IIconBox {
  icon?: ReactNode;
  bgBox?: string;
  className?: string;
  width?: string;
  height?: string;
}

const IconBox = ({
  icon = <IoMdPrint color="white" size="24px" />,
  width = "16",
  height = "16",
  bgBox = "bg-gradient-arsenic",
  className = "",
}: IIconBox): JSX.Element => {
  return (
    <Flex
      className={`p-1 justify-center rounded-xl shadow-box-icon-default w-${width} h-${height} ${bgBox} ${className}`}>
      {icon}
    </Flex>
  );
};

export default IconBox;
