// Components
import ProductInfoDetail from "@/components/ProductManager/ProductInfoDetail/ProductInfoDetail";

//Mocks
import { mockProductInfoDetail } from "@/mocks";

const AddProductPage = () => {
  return (
    <div className="mt-10 mb-18">
      {/* Heading */}
      <div className="mt-12 mb-16">
        <h3 className="text-3xl font-bold text-[#344767] dark:text-white text-center mb-2">
          Add New Product
        </h3>
        <p className="text-lg text-[#7b809a] text-center">
          This information will describe more about the product.
        </p>
      </div>
      <ProductInfoDetail product={mockProductInfoDetail} />
    </div>
  );
};

export default AddProductPage;
