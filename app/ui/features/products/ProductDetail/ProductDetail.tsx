// Components
import Link from "next/link";
import { Flex } from "@tremor/react";
import { CustomImage } from "@/ui/components";
import { ProductInfoDetail } from "@/ui/features/products";

// Services
import { getProductDetails } from "@/services";

// Constants
import { ROUTES } from "@/constants";

// Types
import { Product } from "@/types";

const ProductDetail = async ({ id }: { id: Product["id"] }) => {
  const productData = await getProductDetails(id);

  return (
    <Flex alignItems="start" flexDirection="col" className="lg:flex-row">
      <Flex alignItems="center">
        <CustomImage
          className="rounded-lg"
          src={productData.image}
          width={800}
          height={500}
          alt="product-detail"
        />
      </Flex>
      <Flex
        alignItems="start"
        justifyContent="start"
        flexDirection="col"
        className="lg:px-[50px] xl:px-[90px] 2xl:px-[185px] pt-6 lg:pt-0">
        <ProductInfoDetail product={productData} />
        <Link
          href={`${ROUTES.PRODUCT_LIST}/${id}/edit-product`}
          className="rounded-lg uppercase font-bold text-xs text-white dark:text-white dark:bg-gradient-pickled py-3 px-5 mt-8 bg-gradient-primary shadow-btn-primary hover:shadow-btn-primary-hover hover:dark:bg-gradient-pickled border-none dark:text-white w-full lg:w-auto text-center  tracking-wide">
          Edit Product
        </Link>
      </Flex>
    </Flex>
  );
};

export default ProductDetail;
