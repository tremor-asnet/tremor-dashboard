// Components

import { InputField, StarRating } from "@/ui/components";
import { Text, Flex } from "@tremor/react";

// Constants
import { CURRENCY } from "@/constants";

// Types
import { TProductInfoDetail } from "@/types";

// Helpers
import { moneyFormat } from "@/helpers";

interface ProductInfoDetailProps {
  product: TProductInfoDetail;
}

const ProductInfoDetail = ({ product }: ProductInfoDetailProps) => {
  const { productName, price, quantity, description } = product;
  const quantityValue = quantity === 0 ? "Out Of Stock" : "In Stock";
  const quantityStyle =
    quantity === 0
      ? "text-white bg-red-500 dark:text-lighter"
      : "text-fewter bg-seldom dark:text-fewter";

  return (
    <Flex
      flexDirection="col"
      alignItems="start"
      className="antialiased font-primary">
      <Text className="text-primary dark:text-white font-bold !text-3xl mb-3">
        {productName}
      </Text>
      <StarRating />
      <Flex
        flexDirection="col"
        alignItems="start"
        justifyContent="start"
        className="mt-5">
        <Text className="text-tremor-title font-semibold text-primary dark:text-white">
          Price
        </Text>
        <Flex
          flexDirection="col"
          alignItems="start"
          className="text-xl font-semibold font-primary text-primary dark:text-white"
          data-testid="total-price">
          {moneyFormat({
            value: price,
            currency: CURRENCY.DOLLAR,
          })}
        </Flex>
      </Flex>
      <Text
        className={`p-2 mt-4 font-bold text-xs rounded-tremor-small leading-[9px] tracking-[0.18px] uppercase ${quantityStyle}`}>
        {quantityValue}
      </Text>
      <Flex flexDirection="col" alignItems="start" className="mt-10">
        <Text className="text-secondary dark:text-lighter mb-4">
          Description
        </Text>
        <div
          className="text-secondary dark:text-lighter"
          dangerouslySetInnerHTML={{ __html: description! }}
        />
      </Flex>
      <Flex className="mt-6">
        <InputField
          id="details-quantity"
          type="number"
          label="Quantity"
          readOnly={true}
          defaultValue={quantity}
        />
      </Flex>
    </Flex>
  );
};

export default ProductInfoDetail;
