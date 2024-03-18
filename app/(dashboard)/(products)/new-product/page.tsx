import dynamic from "next/dynamic";

// Components
import { Text } from "@tremor/react";
const AddProductForm = dynamic(
  () => import("@/ui/features/products/Forms/AddProductForm"),
);

const AddProductPage = () => {
  return (
    <div className="mt-10 mb-18 mx-auto lg:w-[67%]">
      {/* Heading */}
      <div className="mt-12 mb-16">
        <h3 className="text-3xl font-bold text-[#344767] dark:text-white text-center mb-2">
          Add New Product
        </h3>
        <Text className="text-xl dark:text-secondary text-secondary text-center">
          This information will describe more about the product.
        </Text>
      </div>
      <AddProductForm />
    </div>
  );
};

export default AddProductPage;
