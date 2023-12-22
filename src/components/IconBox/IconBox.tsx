//Libs
import { ReactNode } from "react";

//Components
import { Flex } from "@tremor/react";
import { IoMdPrint } from "react-icons/io";

type sizeIcon = {
  width: string;
  height: string;
};
interface IIconBox {
  icon?: ReactNode;
  bgBox?: string;
  className?: string;
  sizeBox?: sizeIcon;
}

const IconBox = ({
  icon = <IoMdPrint color="white" size="24px" />,
  sizeBox = { width: "16", height: "16" },
  bgBox = "bg-[linear-gradient(195deg,#42424a,#191919)]",
  className = "",
}: IIconBox): JSX.Element => {
  return (
    <Flex
      className={`p-1 justify-center rounded-xl ${bgBox} w-${sizeBox.width} h-${sizeBox.height} ${className}`}>
      {icon}
    </Flex>
  );
};

export default IconBox;
