// Services
import { getProducts } from "@/services";

// Components
import OtherProducts from "../../components/OtherProducts/OtherProducts";

const OtherProductList = async () => {
  const data = await getProducts();

  return <OtherProducts products={data.results} />;
};

export default OtherProductList;
