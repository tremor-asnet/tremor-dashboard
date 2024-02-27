// Components
import { Suspense } from "react";
import { Bold } from "@tremor/react";
import OtherProductList from "./OtherProductList";
import ProductDetail from "./ProductDetail";

export default async function Page({ params }: { params: { id: number } }) {
  return (
    <div className="opacity-100 mt-1 bg-secondary dark:bg-dark_blue text-primary rounded-xl p-6 shadow-box-icon-default dark:shadow-main-content">
      <Bold className="text-primary text-tremor-primary font-semibold dark:text-white">
        Product Details
      </Bold>
      <div className="pt-6">
        {/* Streaming data */}
        <Suspense
          fallback={
            <div className="flex flex-col md:flex-row w-full h-[900px] rounded-lg animate-pulse gap-2 justify-between mb-10">
              <div className="w-full h-full">
                <div className="w-2/3 h-full bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
              </div>
              <div className="pl-24 w-full h-full">
                <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-52 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-4"></div>
                <div className="mb-10 h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4"></div>

                <div className="mt-10 h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-1/3 mb-2.5"></div>
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-2.5"></div>
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-1/5 mb-2.5"></div>
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-1/3 mb-2.5"></div>
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-1/4 mb-2.5"></div>

                <div className="mt-10 h-10 w-32 bg-gray-200 rounded-lg dark:bg-gray-700  mb-2.5"></div>
              </div>
            </div>
          }>
          <ProductDetail id={params.id} />
        </Suspense>

        {/* Streaming data */}
        <Suspense
          fallback={
            <div className="w-full h-96 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          }>
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
