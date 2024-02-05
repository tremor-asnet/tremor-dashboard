import Link from "next/link";

// Constants
import { PRODUCT } from "@/constants";

// Components
import { CustomImage, ProductInfoDetail } from "@/components";
import { Bold, Flex } from "@tremor/react";
import OtherProducts from "@/components/ProductDetails/OtherProducts/OtherProducts";

// Mocks
import { MOCK_PRODUCTS, mockProductInfoDetail } from "@/mocks";

const ProductDetail = async () => {
  return (
    <div className="opacity-100 bg-secondary dark:bg-dark_blue text-primary rounded-xl p-6 shadow-box-icon-default dark:shadow-main-content">
      <Bold className="text-primary text-tremor-primary dark:text-white">
        Product Details
      </Bold>
      <div className="pt-6">
        <Flex className="items-start flex-col lg:flex-row">
          <Flex>
            <CustomImage
              className="rounded-lg"
              src={PRODUCT.DETAIL}
              width={1424}
              height={950}
              alt="product-detail"
            />
          </Flex>
          <Flex className="flex-col items-start justify-start lg:px-[50px] xl:px-[90px] 2xl:px-[185px] pt-6 lg:pt-0">
            <ProductInfoDetail product={mockProductInfoDetail} />
            <Link
              href="#"
              className="rounded-lg uppercase font-bold text-xs text-white dark:text-white py-3 px-5 mt-7 bg-gradient-primary shadow-btn-primary hover:shadow-btn-primary-hover hover:dark:bg-gradient-pickled border-none dark:text-white">
              Edit Product
            </Link>
          </Flex>
        </Flex>
        <div className="mt-16 mb-4 dark:text-white">
          <OtherProducts
            products={MOCK_PRODUCTS}
            isAvailable="isAvailable"
            keyword="productName"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
