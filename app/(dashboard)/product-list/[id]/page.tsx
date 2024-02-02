import { Bold, Button, Col, Flex, Grid } from "@tremor/react";
import Link from "next/link";

// Constants
import { PRODUCT, ROUTES } from "@/constants";

// Services
import { getProductDetails } from "@/services";
import { CustomImage } from "@/components";

const ProductDetail = async ({ params }: { params: { id: number } }) => {
  const productData = await getProductDetails(params.id);

  return (
    <div className="opacity-100 bg-secondary text-[#344767] rounded-xl p-6 shadow-[0rem_0.25rem_0.375rem_-0.0625rem_rgba(0,0,0,0.1),0rem_0.125rem_0.25rem_-0.0625rem_rgba(0,0,0,0.06)]">
      <Bold className="text-primary text-tremor-primary">Product Details</Bold>
      <div className="pt-6">
        <Flex className="">
          <Flex className="max-w-[1424px]">
            <CustomImage
              src={PRODUCT.PRODUCT_DETAIL}
              width={1424}
              height={950}
              alt="product-detail"
            />
          </Flex>
          <Flex className="flex-col items-start justify-start">
            <Bold>Product name</Bold>
            <Link href={`${ROUTES.PRODUCT_LIST}/${params.id}/edit-product`}>
              <Button className="text-center uppercase sm:px-[22px] bg-gradient-primary dark:bg-gradient-pickled !shadow-btn-primary px-6 py-3 rounded-lg border-0 hover:!shadow-btn-primary-hover">
                Edit Product
              </Button>
            </Link>
          </Flex>
        </Flex>
        <Bold>Other Product</Bold>
      </div>
    </div>
  );
};

export default ProductDetail;
