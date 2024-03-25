"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// Components
import { InputSearch } from "@/ui/components";

// Helpers
import { debounce } from "@/helpers/debounce";

interface InputSearchProps {
  field: string;
  debounceTime?: number;
  param: string;
  valueParam: string;
}

const InputDebounce = ({
  field,
  debounceTime = 1000,
  param,
  valueParam,
}: InputSearchProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const paramsValue = params.get(field);

  const debouncedHandler = useCallback(
    (
      value: string,
      fieldParam: string,
      pathnameParam: string,
      urlParams: URLSearchParams,
    ) => {
      const handleUrlParams = () => {
        urlParams.set(param, valueParam);

        if (value) {
          urlParams.set(fieldParam, value);
        } else {
          urlParams.delete(fieldParam);
        }

        replace(`${pathnameParam}?${urlParams.toString()}`);
      };

      return debounce(handleUrlParams, debounceTime);
    },
    [replace],
  );

  const handleSearch = (value: string) => {
    debouncedHandler(value, field, pathname, params)();
  };

  const resetSearch = () => {
    params.delete(field);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <InputSearch
      onReset={resetSearch}
      onChange={handleSearch}
      value={paramsValue ?? ""}
    />
  );
};

export default InputDebounce;
