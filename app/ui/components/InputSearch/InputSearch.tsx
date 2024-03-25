"use client";

import { ChangeEvent, useRef, useState } from "react";

// Themes
import { spacing } from "@/themes";

// Components
import { Flex, TextInput } from "@tremor/react";
import { MdClose } from "react-icons/md";

interface InputSearchProps {
  value: string;
  onChange: (value: string) => void;
  onReset: () => void;
}

const InputSearch = ({ value, onChange, onReset }: InputSearchProps) => {
  const inputSearchRef = useRef<HTMLInputElement>(null);
  const hasValueInputSearch = inputSearchRef?.current?.value;

  const [searchValue, setSearchValue] = useState<string>(value);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onChange(value);
  };

  const resetSearch = () => {
    setSearchValue("");
    onReset();
    if (inputSearchRef.current) inputSearchRef.current.value = "";
  };

  return (
    <Flex justifyContent="end" className="p-6 relative">
      <TextInput
        ref={inputSearchRef}
        id="search_order"
        className="w-auto dark:bg-transparent dark:border-white"
        onChange={handleSearch}
        placeholder="Search..."
        value={searchValue}
        style={{
          paddingRight: spacing["4"],
        }}
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
