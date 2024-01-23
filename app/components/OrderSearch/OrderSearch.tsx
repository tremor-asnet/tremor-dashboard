"use client";

import { ChangeEvent } from "react";

// Components
import { Flex, TextInput } from "@tremor/react";

// Types
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// Helpers
import { debounce } from "@/helpers/debounce";

const OrderSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const value = e.target.value;
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const debounceSearch = debounce(handleSearch, 1000);

  return (
    <Flex className="p-6 items-start justify-end">
      <TextInput
        id="search_order"
        className="w-auto dark:bg-transparent dark:border-white"
        onChange={debounceSearch}
        placeholder="Search..."
      />
    </Flex>
  );
};

export default OrderSearch;
