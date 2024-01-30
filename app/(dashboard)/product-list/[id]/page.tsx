// Components
import { Flex, Text, Title } from "@tremor/react";

import EditProductForm from "@/components/Forms/EditProductForm";
import { getProductDetails } from "@/services";

const EditProduct = async ({ params }: { params: { id: number } }) => {
  const productData = await getProductDetails(params.id);
  return (
    <>
      <Flex className="mb-32 md:mb-16">
        <div>
          <Title>Make the changes below</Title>
          <Text>
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
