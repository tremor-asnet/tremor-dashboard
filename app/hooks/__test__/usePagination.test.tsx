import { renderHook } from "@testing-library/react";

// Hooks
import { usePagination, DOTS } from "@/hooks/usePagination";

describe("usePagination", () => {
  it("Returns data less than page size", () => {
    const totalCount = 5;
    const pageSize = 10;
    const siblingCount = 1;
    const currentPage = 1;
    const { result } = renderHook(() =>
      usePagination({ totalCount, pageSize, siblingCount, currentPage }),
    );
    expect(result.current).toEqual([1]);
  });

  it("Returns the number of pages greater than or equal to the page count", () => {
    const totalCount = 60;
    const pageSize = 10;
    const siblingCount = 2;
    const currentPage = 3;
    const { result } = renderHook(() =>
      usePagination({ totalCount, pageSize, siblingCount, currentPage }),
    );
    expect(result.current).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("Renders dots on the left", () => {
    const totalCount = 170;
    const pageSize = 10;
    const siblingCount = 1;
    const currentPage = 17;
    const { result } = renderHook(() =>
      usePagination({ totalCount, pageSize, siblingCount, currentPage }),
    );
    expect(result.current).toEqual([1, DOTS, 13, 14, 15, 16, 17]);
  });

  it("Renders dots on the right", () => {
    const totalCount = 170;
    const pageSize = 10;
    const siblingCount = 1;
    const currentPage = 2;
    const { result } = renderHook(() =>
      usePagination({ totalCount, pageSize, siblingCount, currentPage }),
    );
    expect(result.current).toEqual([1, 2, 3, 4, 5, DOTS, 17]);
  });

  it("Renders dots on both sides", () => {
    const totalCount = 300;
    const pageSize = 10;
    const siblingCount = 3;
    const currentPage = 7;
    const { result } = renderHook(() =>
      usePagination({ totalCount, pageSize, siblingCount, currentPage }),
    );
    expect(result.current).toEqual([1, DOTS, 4, 5, 6, 7, 8, 9, 10, DOTS, 30]);
  });
});
