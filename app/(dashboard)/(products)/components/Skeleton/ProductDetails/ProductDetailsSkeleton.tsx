export const ProductDetailsSkeleton = () => (
  <div className="flex flex-col md:flex-row w-full h-[800px] rounded-lg animate-pulse gap-2 justify-between mb-10">
    <div className="w-full h-2/3">
      <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
    </div>
    <div className="md:pl-2 xl:pl-24 w-full h-full">
      <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-52 mb-4"></div>
      <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-4"></div>
      <div className="mb-10 h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4"></div>

      <div className="mt-10 h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-1/3 mb-2.5"></div>
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-2.5"></div>
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-1/5 mb-2.5"></div>
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-1/3 mb-2.5"></div>
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-1/4 mb-2.5"></div>

      <div className="mt-10 h-10 w-full md:w-32 bg-gray-200 rounded-lg dark:bg-gray-700 mb-2.5"></div>
    </div>
  </div>
);
