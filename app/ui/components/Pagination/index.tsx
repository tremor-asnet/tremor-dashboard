import { DOTS, usePagination } from "@/hooks/usePagination";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import { RxDotsHorizontal } from "react-icons/rx";

// Components
import { Text, Button } from "@tremor/react";

interface PaginationProps {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const onClickNextButton = () => {
    onPageChange(currentPage + 1);
  };

  const onClickPreviousButton = () => {
    onPageChange(currentPage - 1);
  };

  const paginationRangeLength = paginationRange.length;
  const showItemsPagination = paginationRangeLength > 1;
  const lastPage = paginationRange[paginationRangeLength - 1];
  const firstItemCurrentPage = currentPage * pageSize - pageSize + 1;
  const lastItemCurrentPage =
    currentPage * pageSize >= totalCount ? totalCount : currentPage * pageSize;
  const totalItems = totalCount < pageSize ? pageSize : lastItemCurrentPage;

  return (
    <div className="antialiased font-primary flex gap-5 flex-col sm:flex-row items-start sm:items-center w-full justify-between p-6">
      <div className="flex w-auto py-2">
        <Text className="text-secondary dark:text-secondary">
          Showing&nbsp;
          <span className="font-normal">{firstItemCurrentPage}</span>&nbsp;
          to&nbsp;
          <span className="font-normal">{totalItems}</span>&nbsp; of{" "}
          <span className="font-normal">{totalCount}</span> entries
        </Text>
      </div>

      {showItemsPagination && (
        <div className="flex gap-2 justify-end items-center md:m-0">
          <Button
            className={`text-sm text-gray-400 dark:text-gray-400 bg-transparent hover:bg-select dark:bg-transparent dark:hover:greyish w-9 h-9 inline-flex justify-center items-center border-gray-300 hover:border-gray-300 !rounded-full box-shadow-transparent dark:hover:border-gray-300 dark:border-greyish dark:hover:bg-grayish ${
              currentPage === 1 ? "hidden" : ""
            }`}
            aria-label="Previous page button"
            data-testid="prev-page-button"
            onClick={onClickPreviousButton}
            disabled={currentPage === 1}>
            <HiMiniChevronLeft />
          </Button>

          {paginationRange.map(pageNumber => {
            const currentPageActive =
              currentPage === pageNumber
                ? "text-sm w-9 h-9 inline-flex opacity-100 border-0 justify-center items-center !rounded-full bg-black text-white dark:text-white shadow-btn-primary dark:shadow-btn-primary dark:bg-gradient-pickled"
                : "text-sm text-gray-400 dark:text-gray-400 bg-transparent hover:bg-select dark:bg-transparent dark:hover:greyish w-9 h-9 inline-flex justify-center items-center border-gray-300 hover:border-gray-300 !rounded-full box-shadow-transparent dark:border-greyish dark:hover:border-greyish";

            if (pageNumber === DOTS) {
              return (
                <RxDotsHorizontal
                  className="dark:text-secondary"
                  key={pageNumber}
                />
              );
            }

            return (
              <Button
                className={`dark:hover:bg-grayish ${currentPageActive}`}
                aria-label={"Page button " + pageNumber}
                key={pageNumber}
                disabled={currentPage === pageNumber}
                onClick={() => onPageChange(pageNumber as number)}>
                {pageNumber}
              </Button>
            );
          })}

          <Button
            className={`text-sm text-gray-400 dark:text-gray-400 bg-transparent hover:bg-select dark:bg-transparent dark:hover:greyish w-9 h-9 inline-flex justify-center items-center border-gray-300 hover:border-gray-300 !rounded-full box-shadow-transparent dark:hover:border-gray-300 dark:border-greyish dark:hover:bg-grayish ${
              currentPage === lastPage ? "hidden" : ""
            }`}
            aria-label="Next page button"
            data-testid="next-page-button"
            onClick={onClickNextButton}
            disabled={currentPage === lastPage}>
            <HiMiniChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
