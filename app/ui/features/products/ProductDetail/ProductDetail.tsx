import Link from "next/link";
import { Flex } from "@tremor/react";

// Components
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
    <Flex
      alignItems="start"
      flexDirection="col"
      justifyContent="start"
      className="lg:flex-row">
      <Flex className="lg:w-[30%]">
        <CustomImage
          objectFit="cover"
          className="rounded-lg lg:w-full lg:h-full"
          src={productData.image}
          width={500}
          height={300}
          alt="product-detail"
        />
      </Flex>
      <Flex
        alignItems="start"
        justifyContent="start"
        flexDirection="col"
        className="lg:px-[100px] pt-6 lg:pt-0 lg:w-[70%]">
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
