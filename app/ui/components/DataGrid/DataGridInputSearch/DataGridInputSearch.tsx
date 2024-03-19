"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// Components
import { InputSearch } from "@/ui/components";

// Helpers
import { debounce } from "@/helpers/debounce";

interface InputSearchProps {
  field: string;
}

const DataGridInputSearch = ({ field }: InputSearchProps) => {
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
      return debounce(() => {
        urlParams.set("page", "1");

        if (value) {
          urlParams.set(fieldParam, value);
        } else {
          urlParams.delete(fieldParam);
        }

        replace(`${pathnameParam}?${urlParams.toString()}`);
      }, 1000);
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

export default DataGridInputSearch;
