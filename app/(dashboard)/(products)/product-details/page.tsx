import Link from "next/link";

// Constants
import { PRODUCT, ROUTES } from "@/constants";

// Components
import { CustomImage, ProductInfoDetail } from "@/components";
import { Bold, Flex } from "@tremor/react";
import OtherProducts from "@/components/ProductDetails/OtherProducts/OtherProducts";

// Mocks
import { MOCK_PRODUCTS, mockProductInfoDetail } from "@/mocks";

const ProductDetail = async () => {
  return (
    <div className="opacity-100 mt-1 bg-secondary dark:bg-dark_blue text-primary rounded-xl p-6 shadow-box-icon-default dark:shadow-main-content">
      <Bold className="text-primary text-tremor-primary font-semibold dark:text-white">
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
            {/* TODO: Only mock will update href */}
            <Link
              href={`${ROUTES.PRODUCT_LIST}/${MOCK_PRODUCTS[0].id}`}
              className="rounded-lg uppercase font-bold text-xs text-white dark:text-white dark:bg-gradient-pickled py-3 px-5 mt-8 bg-gradient-primary shadow-btn-primary hover:shadow-btn-primary-hover hover:dark:bg-gradient-pickled border-none dark:text-white w-full lg:w-auto text-center">
              Edit Product
            </Link>
          </Flex>
        </Flex>
        <div className="mt-16 mb-4 dark:text-white">
          <Bold className="text-primary text-tremor-primary font-semibold dark:text-white">
            Other Products
          </Bold>
          <div className="mt-2">
            <OtherProducts
              products={MOCK_PRODUCTS}
              isAvailable="isAvailable"
              keyword="productName"
              className="!shadow-none"
              hasShowPagination={false}
              hasSort={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
