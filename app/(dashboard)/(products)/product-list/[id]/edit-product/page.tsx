import dynamic from "next/dynamic";

// Components
import { Flex, Text } from "@tremor/react";
const EditProductForm = dynamic(
  () => import("@/ui/features/products/Forms/EditProductForm"),
);

// Services
import { getProductDetails } from "@/services";

const EditProduct = async ({ params }: { params: { id: number } }) => {
  const productData = await getProductDetails(params.id);

  return (
    <>
      <Flex className="mb-32 md:mb-16">
        <div>
          <Text className="font-bold text-primary mb-3 !text-2xl">
            Make the changes below
          </Text>
          <Text className="dark:text-dark-romance !text-base">
            We&apos;re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play.
          </Text>
        </div>
      </Flex>
      <EditProductForm id={params.id} productData={productData} />
    </>
  );
};

export default EditProduct;
