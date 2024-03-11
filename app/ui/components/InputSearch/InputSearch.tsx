"use client";

import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";

// Components
import { Flex, TextInput } from "@tremor/react";
import { MdClose } from "react-icons/md";

// Types
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// Helpers
import { debounce } from "@/helpers/debounce";

interface InputSearchProps {
  field: string;
}

const InputSearch = ({ field }: InputSearchProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const inputSearchRef = useRef<HTMLInputElement>(null);
  // @ts-ignore (us this comment if typescript raises an error)
  const hasValueInputSearch = inputSearchRef?.current?.value;

  const [searchValue, setSearchValue] = useState<string>(() => {
    const paramsValue = params.get(field);

    return paramsValue || "";
  });

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

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchValue(value);
    debouncedHandler(value, field, pathname, params)();
  };

  const resetSearch = () => {
    setSearchValue("");

    params.delete(field);
    // @ts-ignore (us this comment if typescript raises an error)
    inputSearchRef.current.value = "";
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Flex className="p-6 items-center justify-end relative">
      <TextInput
        ref={inputSearchRef}
        id="search_order"
        className="w-auto dark:bg-transparent dark:border-white"
        onChange={handleSearch}
        placeholder="Search..."
        value={searchValue}
      />
      {(hasValueInputSearch || searchValue) && (
        <MdClose
          data-testid="close-button"
          onClick={resetSearch}
          className="text-xs text-white bg-black dark:text-black dark:bg-white absolute right-8 p-[2px] cursor-pointer rounded-full z-[1]"
        />
      )}
    </Flex>
  );
};

export default InputSearch;
