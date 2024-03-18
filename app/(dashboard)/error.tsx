"use client";

import { useEffect } from "react";

// Components
import { Button } from "@tremor/react";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col inset-0 items-center justify-center min-h-screen -mt-[130px]">
      <h2 className="text-center dark:text-white">Something went wrong!</h2>
      <Button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white dark:text-white transition-colors hover:bg-blue-400 border-none"
        onClick={() => reset()}>
        Try again
      </Button>
    </main>
  );
};

export default Error;
