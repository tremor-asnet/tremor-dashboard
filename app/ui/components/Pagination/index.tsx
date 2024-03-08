import { DOTS, usePagination } from "@/hooks/usePagination";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import { RxDotsHorizontal } from "react-icons/rx";

// Components
import { Text } from "@tremor/react";

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
  const showItemsPagination = currentPage !== 0 && paginationRangeLength > 2;
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
          <button
            className={`btn-paginate dark:border-greyish hover:bg-select dark:hover:bg-grayish ${
              currentPage === 1 ? "hidden" : ""
            }`}
            aria-label="Previous page button"
            data-testid="prev-page-button"
            onClick={onClickPreviousButton}
            disabled={currentPage === 1}>
            <HiMiniChevronLeft />
          </button>

          {paginationRange.map(pageNumber => {
            const currentPageActive =
              currentPage === pageNumber
                ? "btn-paginate-active dark:bg-gradient-pickled shadow-btn-primary"
                : "btn-paginate dark:border-greyish hover:bg-select";

            if (pageNumber === DOTS) {
              return (
                <RxDotsHorizontal
                  className="dark:text-secondary"
                  key={pageNumber}
                />
              );
            }

            return (
              <button
                className={`dark:hover:bg-grayish ${currentPageActive}`}
                aria-label={"Page button " + pageNumber}
                key={pageNumber}
                disabled={currentPage === pageNumber}
                onClick={() => onPageChange(pageNumber as number)}>
                {pageNumber}
              </button>
            );
          })}

          <button
            className={`btn-paginate dark:border-greyish dark:hover:bg-grayish ${
              currentPage === lastPage ? "hidden" : ""
            }`}
            aria-label="Next page button"
            data-testid="next-page-button"
            onClick={onClickNextButton}
            disabled={currentPage === lastPage}>
            <HiMiniChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
