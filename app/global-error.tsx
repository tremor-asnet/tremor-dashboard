"use client";

// Component
import { Button } from "./ui/components";

// Constants
import { VARIANT_BUTTON } from "./constants";

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
            variant={VARIANT_BUTTON.PRIMARY}
            additionalClass="py-3 px-5 border-none dark:text-white"
            onClick={() => reset()}>
            Try again
          </Button>
        </main>
      </body>
    </html>
  );
}
