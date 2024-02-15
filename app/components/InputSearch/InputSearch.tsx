"use client";

import { ChangeEvent, useRef } from "react";

// Components
import { Flex, TextInput } from "@tremor/react";
import { MdClose } from "react-icons/md";

// Types
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// Helpers
import { debounce } from "@/helpers/debounce";

const InputSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const inputSearchRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const value = e.target.value.trim();

    if (value) {
      params.set("productName", value);
    } else {
      params.delete("productName");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const resetSearch = () => {
    params.delete("productName");
    // @ts-ignore (us this comment if typescript raises an error)
    inputSearchRef.current.value = "";
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Flex className="p-6 items-center justify-end">
      <TextInput
        ref={inputSearchRef}
        id="search_order"
        className="w-auto dark:bg-transparent dark:border-white"
        onChange={debounce(handleSearch, 1000)}
        placeholder="Search..."
      />
      {params.toString() && (
        <MdClose
          onClick={resetSearch}
          className="text-xs text-white -ml-5 bg-black p-[2px] cursor-pointer rounded-full z-10"
        />
      )}
    </Flex>
  );
};

export default InputSearch;
