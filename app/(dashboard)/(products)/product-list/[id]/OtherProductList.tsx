// Services
import { getProducts } from "@/services";

// Types
import type { Product } from "@/types";

// Components
import OtherProducts from "../../components/OtherProducts/OtherProducts";

const OtherProductList = async () => {
  const productListData: Product[] = await getProducts();

  return <OtherProducts products={productListData} />;
};

export default OtherProductList;
