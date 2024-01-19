"use client";
import { useState, useCallback } from "react";

// Components
import { Flex } from "@tremor/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PaginationProps {
  totalCount?: number;
  offset?: number;
  pageSize?: number;
  hasNext?: boolean;
  hasPrev?: boolean;
  onPageChange?: (offset: number) => void;
}

export const Pagination = ({
  totalCount,
  offset = 1,
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
  const total = data.totalCount || 1;
  const listItemsPage = Array.from({ length: total }, (v, i) => i);

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

  const handleChangePage = (curentOffset: number) => {
    onPageChange(curentOffset);
    setData({
      ...data,
      pageOffset: curentOffset,
    });
  };

  return (
    <Flex className="antialiased font-primary flex items-center w-full justify-between bg-white px-4 py-3 sm:px-6">
      <Flex className="flex flex-wrap items-center justify-between w-full">
        <Flex className="w-auto py-2">
          <p className="text-sm text-secondary">
            Showing <span className="font-normal">1</span> to{" "}
            <span className="font-normal">10</span> of{" "}
            <span className="font-normal">12</span> entries
          </p>
        </Flex>
        <Flex className="w-auto py-2">
          <nav
            className="isolate inline-flex -space-x-px gap-2"
            aria-label="Pagination">
            {data.hasPrev && (
              <button
                onClick={handlePrevPage}
                disabled={!data.hasPrev}
                className="relative inline-flex items-center justify-center rounded-full w-[36px] h-[36px] text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-body focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Previous</span>
                <FiChevronLeft className="h-5 w-5 p-[3px]" aria-hidden="true" />
              </button>
            )}
            {listItemsPage.map(curentPage => (
              <a
                href="#"
                key={curentPage}
                onClick={() => handleChangePage(curentPage + 1)}
                className={`relative inline-flex items-center justify-center rounded-full w-[36px] h-[36px] text-sm font-normal focus:z-20 ${
                  data.pageOffset === curentPage + 1
                    ? "z-10  bg-gradient-item-page text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 shadow-item-pagination"
                    : "text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline-offset-0 hover:bg-body"
                }`}>
                {curentPage + 1}
              </a>
            ))}
            {data.hasNext && (
              <button
                onClick={handleNextPage}
                disabled={!data.hasNext}
                className="relative inline-flex items-center rounded-full px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-body focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Next</span>
                <FiChevronRight
                  className="h-5 w-5 p-[3px]"
                  aria-hidden="true"
                />
              </button>
            )}
          </nav>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Pagination;
