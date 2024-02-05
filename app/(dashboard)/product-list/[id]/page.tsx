import { Bold, Button, Flex } from "@tremor/react";
import Link from "next/link";

// Constants
import { PRODUCT, ROUTES } from "@/constants";

// Services
import { getProductDetails } from "@/services";

// Components
import { CustomImage } from "@/components";

const ProductDetail = async ({ params }: { params: { id: number } }) => {
  const productData = await getProductDetails(params.id);

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
              src={PRODUCT.PRODUCT_DETAIL}
              width={1424}
              height={950}
              alt="product-detail"
            />
          </Flex>
          <Flex className="flex-col items-start justify-start lg:px-[50px] xl:px-[90px] 2xl:px-[185px] pt-6 lg:pt-0">
            <Bold className="dark:text-white pb-4">Product name</Bold>
            <Link href={`${ROUTES.PRODUCT_LIST}/${params.id}/edit-product`}>
              <Button className="text-center uppercase sm:px-[22px] bg-gradient-primary dark:bg-gradient-pickled !shadow-btn-primary px-6 py-3 rounded-lg border-0 hover:!shadow-btn-primary-hover dark:text-white">
                Edit Product
              </Button>
            </Link>
          </Flex>
        </Flex>
        <div className="mt-16 mb-4 dark:text-white">
          <Bold>Other Product</Bold>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
