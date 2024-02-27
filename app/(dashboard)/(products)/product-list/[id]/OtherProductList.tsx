// Services
import { getProducts } from "@/services";

// Components
import OtherProducts from "../../components/OtherProducts/OtherProducts";

const OtherProductList = async () => {
  const { results } = await getProducts();
  const otherProductList = results.slice(0, 4);

  return <OtherProducts products={otherProductList} />;
};

export default OtherProductList;
