import { DOTS, usePagination } from "@/hooks/usePagination";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import { RxDotsHorizontal } from "react-icons/rx";

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

  if (currentPage === 0 || paginationRange!.length < 2) {
    return null;
  }

  const onClickNextButton = () => {
    onPageChange(currentPage + 1);
  };

  const onClickPreviousButton = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange![paginationRange!.length - 1];

  return (
    <div className="antialiased font-primary flex gap-6 flex-col sm:flex-row items-start sm:items-center w-full justify-between px-4 py-3 sm:px-6">
      <div className="flex w-auto py-2">
        <p className="text-sm text-secondary">
          Showing{" "}
          <span className="font-normal">
            {currentPage * pageSize - pageSize + 1}
          </span>{" "}
          to{" "}
          <span className="font-normal">
            {currentPage * pageSize >= totalCount
              ? totalCount
              : currentPage * pageSize}
          </span>{" "}
          of <span className="font-normal">{totalCount}</span> entries
        </p>
      </div>

      <div className="flex gap-2 justify-end items-center m-auto md:m-0">
        <button
          className={`btn-paginate ${currentPage === 1 ? "hidden" : ""}`}
          aria-label="Previous page button"
          data-testid="prev-page-button"
          onClick={onClickPreviousButton}
          disabled={currentPage === 1}>
          <HiMiniChevronLeft />
        </button>

        {paginationRange?.map(pageNumber => {
          if (pageNumber === DOTS)
            return <RxDotsHorizontal className="dark:text-secondary" />;

          return (
            <button
              className={
                currentPage === pageNumber
                  ? "btn-paginate-active"
                  : "btn-paginate"
              }
              aria-label={"Page button " + pageNumber}
              key={pageNumber}
              disabled={currentPage === pageNumber}
              onClick={() => onPageChange(pageNumber as number)}>
              {pageNumber}
            </button>
          );
        })}

        <button
          className={`btn-paginate ${currentPage === lastPage ? "hidden" : ""}`}
          aria-label="Next page button"
          data-testid="next-page-button"
          onClick={onClickNextButton}
          disabled={currentPage === lastPage}>
          <HiMiniChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
