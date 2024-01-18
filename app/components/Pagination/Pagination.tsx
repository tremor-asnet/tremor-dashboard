"use client";
import { useState, useCallback } from "react";

// Components
import { Flex } from "@tremor/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PaginationProps {
  totalCount?: number;
  offset?: number;
  pageSize?: number;
  from?: number;
  to?: number;
  hasNext?: boolean;
  hasPrev?: boolean;
  onPageChange?: (offset: number) => void;
}

export const Pagination = ({
  totalCount,
  offset = 0,
  pageSize = 1,
  hasNext = true,
  hasPrev = false,
  onPageChange = () => {},
}: PaginationProps) => {
  const [data, setData] = useState({
    pageOffset: offset,
    pageSize: pageSize,
    totalCount: totalCount,
    hasPrev: hasPrev,
    hasNext: hasNext,
  });
  const total = data.totalCount || 0;

  const handleNextPage = useCallback(() => {
    const newOffset: number =
      data.pageOffset + data.pageSize <= total
        ? data.pageOffset + data.pageSize
        : total;
    onPageChange(newOffset);
    setData({
      ...data,
      pageOffset: newOffset,
      hasNext: newOffset < total,
      hasPrev: true,
    });
  }, [data]);

  const handlePrevPage = () => {
    const newOffset: number =
      data.pageOffset - data.pageSize >= 0
        ? data.pageOffset - data.pageSize
        : 0;
    onPageChange(newOffset);
    setData({
      ...data,
      pageOffset: newOffset,
      hasPrev: newOffset < 1,
      hasNext: true,
    });
  };

  return (
    <Flex className="antialiased font-primary flex items-center w-full justify-between bg-white px-4 py-3 sm:px-6">
      <Flex className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Next
        </a>
      </Flex>
      <Flex className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between w-full">
        <Flex>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">12</span> entries
          </p>
        </Flex>
        <Flex className="justify-end">
          <nav
            className="isolate inline-flex -space-x-px gap-2"
            aria-label="Pagination">
            <button
              onClick={handlePrevPage}
              disabled={!data.hasPrev}
              className="relative inline-flex items-center justify-center rounded-full w-[36px] h-[36px] text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span className="sr-only">Previous</span>
              <FiChevronLeft className="h-5 w-5 p-[3px]" aria-hidden="true" />
            </button>
            <a
              href="#"
              className="relative inline-flex items-center justify-center rounded-full w-[36px] h-[36px] text-sm font-normal text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 hover:bg-gray">
              1
            </a>
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center justify-center rounded-full bg-gradient-item-page w-[36px] h-[36px] text-sm font-normal text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 shadow-item-pagination">
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center justify-center rounded-full w-[36px] h-[36px] text-sm font-normal text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">
              3
            </a>
            <button
              onClick={handleNextPage}
              disabled={!data.hasNext}
              className="relative inline-flex items-center rounded-full px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span className="sr-only">Next</span>
              <FiChevronRight className="h-5 w-5 p-[3px]" aria-hidden="true" />
            </button>
          </nav>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Pagination;
