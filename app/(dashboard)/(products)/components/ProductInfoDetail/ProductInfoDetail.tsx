// Components

import { Text, Flex } from "@tremor/react";
import { StarRating, InputField } from "@/components";

// Constants
import { CURRENCY } from "@/constants";

// Types
import { TProductInfoDetail } from "@/types";

// Helpers
import { formatDotsToCommasNumber } from "@/helpers";

interface ProductInfoDetailProps {
  product: TProductInfoDetail;
}

const ProductInfoDetail = ({ product }: ProductInfoDetailProps) => {
  const { productName, price, quantity, description } = product;
  const quantityValue = quantity === 0 ? "Out Of Stock" : "In Stock";

  return (
    <Flex className="antialiased font-primary flex-col items-start">
      <Text className="text-primary dark:text-white font-bold !text-3xl mb-3">
        {productName}
      </Text>
      <StarRating />
      <Flex className="mt-5 flex-col items-start justify-start">
        <Text className="text-tremor-title font-semibold text-primary dark:text-white">
          Price
        </Text>
        <Flex
          className="flex-col items-start text-xl font-semibold font-primary text-primary dark:text-white"
          data-testid="total-price">
          {formatDotsToCommasNumber({
            value: price,
            currency: CURRENCY.DOLLAR,
            positionFraction: 2,
          })}
        </Flex>
      </Flex>
      <Text className="p-2 mt-4 font-bold text-fewter bg-seldom text-xs rounded-tremor-small leading-[9px] tracking-[0.18px] uppercase dark:text-fewter">
        {quantityValue}
      </Text>
      <Flex className="flex-col items-start mt-10">
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
