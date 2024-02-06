"use client";

// Libs
import Link from "next/link";

// Components
import InputField from "@/components/common/CustomField/InputField/InputField";

import { Text, Flex } from "@tremor/react";
import { StarRating } from "@/components";

// Constants
import { CURRENCY } from "@/constants";

// Types
import { TProductInfoDetail } from "@/types";

// Helpers
import { formattedNumber } from "@/helpers";

interface ProductInfoDetailProps {
  product: TProductInfoDetail;
}

const ProductInfoDetail = ({ product }: ProductInfoDetailProps) => {
  const { productName, price, quantity } = product;

  return (
    <Flex className="antialiased font-primary flex-col items-start lg:w-[426px]">
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
          {formattedNumber({
            value: price,
            currency: CURRENCY.DOLLAR,
          })}
        </Flex>
      </Flex>
      <Text className="p-2 mt-4 font-bold text-fewter bg-seldom text-xs rounded-tremor-small leading-[9px] tracking-[0.18px] uppercase dark:text-fewter">
        In Stock
      </Text>
      <Flex className="flex-col items-start mt-10">
        <Text className="text-secondary dark:text-lighter mb-4">
          Description
        </Text>
        <ul className="text-secondary pl-6 list-outside list-disc text-tremor-title dark:text-lighter">
          <li>
            The most beautiful curves of this swivel stool adds an elegant touch
            to any environment
          </li>
          <li>Memory swivel seat returns to original seat position</li>
          <li>Comfortable integrated layered chair seat cushion design</li>
          <li>Fully assembled! No assembly required</li>
        </ul>
      </Flex>
      <Flex className="mt-6">
        <InputField
          type="number"
          label="Quantity"
          isLabelTransform={true}
          defaultValue={quantity}
        />
      </Flex>
    </Flex>
  );
};

export default ProductInfoDetail;
