import Link from "next/link";

// Constants
import { ROUTES } from "@/constants";

// Components
import { CustomImage } from "@/components";
import { Bold, Flex } from "@tremor/react";
import OtherProducts from "@/components/ProductDetails/OtherProducts/OtherProducts";
import ProductInfoDetail from "../../components/ProductInfoDetail/ProductInfoDetail";

// Services
import { getProductDetails, getProducts } from "@/services";

// Types
import { Product } from "@/types";

const ProductDetail = async ({ params }: { params: { id: number } }) => {
  const productData = await getProductDetails(params.id);
  const productListData: Product[] = await getProducts();

  return (
    <div className="opacity-100 mt-1 bg-secondary dark:bg-dark_blue text-primary rounded-xl p-6 shadow-box-icon-default dark:shadow-main-content">
      <Bold className="text-primary text-tremor-primary font-semibold  dark:text-white">
        Product Details
      </Bold>
      <div className="pt-6">
        <Flex className="items-start flex-col lg:flex-row">
          <Flex>
            <CustomImage
              className="rounded-lg"
              src={productData.image}
              width={1424}
              height={950}
              alt="product-detail"
            />
          </Flex>
          <Flex className="flex-col items-start justify-start lg:px-[50px] xl:px-[90px] 2xl:px-[185px] pt-6 lg:pt-0">
            <ProductInfoDetail product={productData} />
            <Link
              href={`${ROUTES.PRODUCT_LIST}/${params.id}/edit-product`}
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
              products={productListData.slice(0, 5)}
              isAvailable="isAvailable"
              keyword="productName"
              className="!shadow-none"
              hasPagination={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
