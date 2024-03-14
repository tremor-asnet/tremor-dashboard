import { revalidateTag } from "next/cache";

// Services
import { getProducts } from "@/services";

// Components
import { OtherProducts } from "@/ui/features/products";

// Constants
import { PRODUCT_DETAILS_TAG } from "@/constants";

const OtherProductList = async () => {
  const { results } = await getProducts();
  revalidateTag(PRODUCT_DETAILS_TAG);
  const otherProductList = results.slice(0, 4);

  return <OtherProducts products={otherProductList} />;
};

export default OtherProductList;
