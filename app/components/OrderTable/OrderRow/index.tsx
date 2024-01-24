// Components
import { Flex, TableCell, TableRow, Text } from "@tremor/react";
import { CustomImage } from "@/components";
import Checkbox from "./Checkbox";

// Helper
import { ProductStatus, formatDateTime } from "@/helpers";

// Types
import { ProductOrder, TProductTable } from "@/types";
import Link from "next/link";

// Constants
import { SEPARATOR, STATUS_TEXT, ROUTES } from "@/constants";

const OrderRow = ({
  id,
  createdAt,
  status,
  customer,
  products,
  revenue,
}: TProductTable) => {
  const handleChangeCheckbox = () => {
    // TODO: Handle change checkbox checked here
  };

  return (
    <TableRow>
      <TableCell className="px-6 py-5 border-0 border-b border-gray-100">
        <Flex className="justify-start ml-2">
          <Checkbox onChange={handleChangeCheckbox} />
          <Link
            href={`${ROUTES.ORDER_LIST}/${id}`}
            className="ml-4 text-xs font-semibold leading-[15px] tracking-[0.4px] order-id hover:underline">
            &#35;{id}
          </Link>
        </Flex>
      </TableCell>
      <TableCell className="px-6 py-5 border-0 border-b border-gray-100">
        <Text className="text-xs font-semibold leading-[15px] tracking-[0.4px] order-dagte">
          {formatDateTime(createdAt, SEPARATOR.COMMAS)}
        </Text>
      </TableCell>
      <TableCell className="px-6 py-5 border-0 border-b border-gray-100">
        <Flex className="justify-start text-xs font-semibold leading-[15px] tracking-[0.4px] capitalize order-status">
          {ProductStatus(status)}
          <Text className="text-xs font-semibold leading-[15px] tracking-[0.4px] capitalize order-status">
            {STATUS_TEXT[status]}
          </Text>
        </Flex>
      </TableCell>
      <TableCell className="px-6 py-5 border-0 border-b border-gray-100">
        <Flex className="w-auto justify-start">
          {customer.avatar ? (
            <CustomImage
              alt={customer.full_name}
              className="w-6 h-6 rounded-full mr-2"
              height={24}
              priority
              src={customer.avatar}
              width={24}
            />
          ) : (
            <Flex className="w-6 h-6 justify-center text-white text-xs bg-primary rounded-full mr-2">
              {customer.full_name.substring(0, 1)}
            </Flex>
          )}
          <Text className="text-xs font-semibold leading-[15px] tracking-[0.4px] capitalize order-customer">
            {customer.full_name}
          </Text>
        </Flex>
      </TableCell>
      <TableCell className="px-6 py-5 border-0 border-b border-gray-100">
        {products?.map((product: ProductOrder, index: number) => (
          <Text
            key={product.id}
            className="text-xs font-semibold leading-[15px] tracking-[0.4px] truncate max-w-[100px] lg:max-w-[200px] xl:max-w-[300px] 2xl:max-w-[400px] min-w-[100px] order-product">
            {product.name}
          </Text>
        ))}
      </TableCell>
      <TableCell className="px-6 py-5 border-0 border-b border-gray-100">
        <Text className="text-xs font-semibold leading-[15px] tracking-[0.4px] order-revenue">
          {revenue}
        </Text>
      </TableCell>
    </TableRow>
  );
};

export default OrderRow;
