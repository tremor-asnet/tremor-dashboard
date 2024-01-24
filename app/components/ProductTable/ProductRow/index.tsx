import Checkbox from "@/components/common/Checkbox";
import { Product } from "@/types";
import { Flex, TableCell, TableRow, Text } from "@tremor/react";
import Image from "next/image";

interface ProductRowProps {
  id: string;
  image: string;
  name: string;
  price: number;
  isAvailable: boolean;
  providerName: string;
  createdAt: string;
}

const ProductRow = ({
  id,
  image,
  name,
  price,
  isAvailable,
  providerName,
  createdAt,
}: ProductRowProps) => {
  const handleChangeCheckbox = () => {
    // TODO: Handle checkbox here
  };

  return (
    <TableRow>
      <TableCell className="px-6 py-5 border-0 border-b border-gray-100">
        <Flex className="justify-start ml-2">
          <Checkbox onChange={handleChangeCheckbox} />
          <Text className="ml-4 text-xs font-semibold leading-[15px] tracking-[0.4px] order-id">
            #{id}
          </Text>
        </Flex>
      </TableCell>
      <TableCell className="px-6 py-5 border-0 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <Image
            src={image}
            alt={name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <h6 className="text-xs font-semibold">{name}</h6>
        </div>
      </TableCell>
      <TableCell className="px-6 py-5 border-0 border-b border-gray-100">
        <h6 className="text-xs font-semibold">$ {price}</h6>
      </TableCell>
      <TableCell className="px-6 py-5 border-0 border-b border-gray-100">
        <h6 className="text-xs font-semibold">{isAvailable ? "Yes" : "No"}</h6>
      </TableCell>
      <TableCell className="px-6 py-5 border-0 border-b border-gray-100">
        <h6 className="text-xs font-semibold">{providerName}</h6>
      </TableCell>
      <TableCell className="px-6 py-5 border-0 border-b border-gray-100">
        <h6 className="text-xs font-semibold">{createdAt}</h6>
      </TableCell>
    </TableRow>
  );
};

export default ProductRow;
