import { Flex } from "@tremor/react";

const LoadingIndicator = ({
  width,
  height,
  isFullWidth = false,
}: {
  width: number;
  height: number;
  isFullWidth?: boolean;
}) =>
  isFullWidth ? (
    <div className="fixed bg-[rgba(0,0,0,0.5)] overflow-hidden w-full h-full inset-0 z-50 cursor-not-allowed">
      <Flex className="justify-center items-center h-full">
        <div role="status">
          <svg
            aria-hidden="true"
            className={`w-${width} h-${height} text-transparent animate-[spin_0.4s_linear_infinite] dark:text-gray-600 fill-white`}
            viewBox="0 0 22 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 3C11 2.44772 11.4477 2 12 2C17.5228 2 22 6.47715 22 12C22 14.7175 20.9147 17.1835 19.1562 18.9849C18.7704 19.3801 18.1373 19.3878 17.7421 19.002C17.3469 18.6162 17.3392 17.983 17.725 17.5879C19.1336 16.1449 20 14.1746 20 12C20 7.58172 16.4183 4 12 4C11.4477 4 11 3.55228 11 3Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </Flex>
    </div>
  ) : (
    <div role="status">
      <svg
        aria-hidden="true"
        className={`w-${width} h-${height} text-transparent animate-[spin_0.4s_linear_infinite] dark:text-gray-600 fill-white`}
        viewBox="0 0 22 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11 3C11 2.44772 11.4477 2 12 2C17.5228 2 22 6.47715 22 12C22 14.7175 20.9147 17.1835 19.1562 18.9849C18.7704 19.3801 18.1373 19.3878 17.7421 19.002C17.3469 18.6162 17.3392 17.983 17.725 17.5879C19.1336 16.1449 20 14.1746 20 12C20 7.58172 16.4183 4 12 4C11.4477 4 11 3.55228 11 3Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );

export default LoadingIndicator;
