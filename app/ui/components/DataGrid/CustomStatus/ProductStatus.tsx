// Components
import { Button } from "../..";

// Icons
import { MdDone, MdReplay, MdClose } from "react-icons/md";

// Constants
import { VARIANT_BUTTON } from "@/constants";

interface ProductStatusProps {
  status: number;
}

export const ProductStatus = ({ status }: ProductStatusProps) => {
  switch (status) {
    case 0:
      return (
        <Button
          additionalClass="border-green-500"
          variant={VARIANT_BUTTON.LIGHT_STATUS}
          variantTremor={VARIANT_BUTTON.LIGHT}
          onClick={() => {}}>
          <MdDone className="text-xs text-green-500" />
        </Button>
      );
    case 1:
      return (
        <Button
          additionalClass="border-red-500"
          variant={VARIANT_BUTTON.LIGHT_STATUS}
          variantTremor={VARIANT_BUTTON.LIGHT}
          onClick={() => {}}>
          <MdClose className="text-xs text-red-500" />
        </Button>
      );
    case 2:
      return (
        <Button
          additionalClass="border-primary dark:border-primary"
          variant={VARIANT_BUTTON.LIGHT_STATUS}
          variantTremor={VARIANT_BUTTON.LIGHT}
          onClick={() => {}}>
          <MdReplay className="text-xs text-primary dark:text-primary" />
        </Button>
      );
    default:
      return <span className="w-[25px] h-[25px] mr-2"></span>;
  }
};
