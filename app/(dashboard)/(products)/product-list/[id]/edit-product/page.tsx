import dynamic from "next/dynamic";

// Components
import { Flex, Text } from "@tremor/react";
const EditProductForm = dynamic(
  () => import("@/ui/features/products/Forms/EditProductForm"),
);

// Services
import { getProductDetails } from "@/services";

const EditProduct = async ({ params }: { params: { id: number } }) => {
  // const productData = await getProductDetails(params.id);
  const data = {
    id: 44,
    createdAt: "2023-11-01T04:22:00+00:00",
    productName: "Modern Square",
    price: 59.99,
    isAvailable: false,
    providerName: "Provider C",
    image:
      "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/chair-wood.d127f22b.jpeg",
    currency: 0,
    sku: "000000000",
    tags: [],
    shopifyUrl: "https://www.shopify.com/",
    facebookUrl: "https://www.facebook.com/",
    instagramUrl: "https://www.instagram.com/",
    quantity: 5,
    weight: 0,
    category: 0,
    description: '""',
  };

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
      <EditProductForm id={params.id} productData={data} />
    </>
  );
};

export default EditProduct;
