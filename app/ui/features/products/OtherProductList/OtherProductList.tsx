// Services
import { getProducts } from "@/services";

// Components
import { OtherProducts } from "@/ui/features/products";

const OtherProductList = async () => {
  const { results } = await getProducts();
  const otherProductList = results.slice(0, 4);

  return <OtherProducts products={otherProductList} />;
};

export default OtherProductList;
