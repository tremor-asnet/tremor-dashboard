// Components
import { Suspense } from "react";
import { Bold } from "@tremor/react";
import OtherProductList from "./OtherProductList";
import ProductDetail from "./ProductDetail";
import { ProductDetailsSkeleton } from "../../components/Skeleton/ProductDetails/ProductDetailsSkeleton";
import { OtherProductSkeleton } from "../../components/Skeleton/OtherProducts/OtherProductSkeleton";

export default async function Page({ params }: { params: { id: number } }) {
  return (
    <div className="opacity-100 mt-1 bg-secondary dark:bg-dark_blue text-primary rounded-xl p-6 shadow-box-icon-default dark:shadow-main-content">
      <Bold className="text-primary text-tremor-primary font-semibold dark:text-white">
        Product Details
      </Bold>
      <div className="pt-6">
        {/* Streaming data */}
        <Suspense fallback={<ProductDetailsSkeleton />}>
          <ProductDetail id={params.id} />
        </Suspense>

        {/* Streaming data */}
        <Suspense fallback={<OtherProductSkeleton />}>
          <div className="mt-16 mb-4 dark:text-white">
            <Bold className="text-primary text-tremor-primary font-semibold dark:text-white">
              Other Products
            </Bold>
            <div className="mt-2">
              <OtherProductList />
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  );
}
