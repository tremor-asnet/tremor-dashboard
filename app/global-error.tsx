"use client";

// Component
import { Button } from "@tremor/react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <main className="flex flex-col inset-0 items-center justify-center min-h-screen">
          <h2 className="text-center dark:text-white mb-4">
            Something went wrong!
          </h2>
          <Button
            className="py-3 px-5 bg-gradient-primary dark:bg-gradient-pickled border-none dark:text-white"
            onClick={() => reset()}>
            Try again
          </Button>
        </main>
      </body>
    </html>
  );
}
