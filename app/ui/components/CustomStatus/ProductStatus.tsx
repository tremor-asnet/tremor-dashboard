// Components
import { Button } from "@tremor/react";

// Icons
import { MdDone, MdReplay, MdClose } from "react-icons/md";

interface ProductStatusProps {
  status: number;
}

export const ProductStatus = ({ status }: ProductStatusProps) => {
  switch (status) {
    case 0:
      return (
        <Button
          className="w-[25px] h-[25px] justify-center items-center rounded-full border border border-green-500 mr-2 text-tremor-content-title hover:text-tremor-content-title"
          variant="light"
          onClick={() => {}}>
          <MdDone className="text-xs text-green-500" />
        </Button>
      );
    case 1:
      return (
        <Button
          className="w-[25px] h-[25px] justify-center items-center rounded-full border border border-red-500 mr-2 text-tremor-content-title hover:text-tremor-content-title"
          variant="light"
          onClick={() => {}}>
          <MdClose className="text-xs text-red-500" />
        </Button>
      );
    case 2:
      return (
        <Button
          className="w-[25px] h-[25px] justify-center items-center rounded-full border border border-primary dark:border-primary mr-2 text-tremor-content-title hover:text-tremor-content-title"
          variant="light"
          onClick={() => {}}>
          <MdReplay className="text-xs text-primary dark:text-primary" />
        </Button>
      );
    default:
      return <span className="w-[25px] h-[25px] mr-2"></span>;
  }
};
