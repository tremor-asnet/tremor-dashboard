//Libs
import { ReactNode } from "react";

//Components
import { Flex } from "@tremor/react";
import { IoMdPrint } from "react-icons/io";

interface IIconBox {
  icon?: ReactNode;
  className?: string;
}

const IconBox = ({
  icon = <IoMdPrint color="white" size="24px" />,
  className = "w-[74px] h-[74px] bg-[linear-gradient(195deg,#42424a,#191919)]",
}: IIconBox): JSX.Element => {
  return (
    <Flex className={`p-1 justify-center rounded-xl ${className}`}>{icon}</Flex>
  );
};

export default IconBox;
