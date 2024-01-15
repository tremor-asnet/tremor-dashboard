const LoadingIndicator = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => (
  <div role="status">
    <svg
      aria-hidden="true"
      className={`w-${width} h-${height} text-transparent animate-spin dark:text-gray-600 fill-white`}
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M11 3C11 2.44772 11.4477 2 12 2C17.5228 2 22 6.47715 22 12C22 14.7175 20.9147 17.1835 19.1562 18.9849C18.7704 19.3801 18.1373 19.3878 17.7421 19.002C17.3469 18.6162 17.3392 17.983 17.725 17.5879C19.1336 16.1449 20 14.1746 20 12C20 7.58172 16.4183 4 12 4C11.4477 4 11 3.55228 11 3Z"
        fill="currentFill"
      />
    </svg>
    <span className="sr-only">Loading...</span>
  </div>
);

export default LoadingIndicator;
