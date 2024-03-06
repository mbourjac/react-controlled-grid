type PaginationProps = {
  currentPage: number;
  totalPages: number;
  handleLoadPrevious: () => void;
  handleLoadNext: () => void;
};

export const Pagination = ({
  currentPage,
  totalPages,
  handleLoadPrevious,
  handleLoadNext,
}: PaginationProps) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="flex gap-5">
      <button
        onClick={handleLoadPrevious}
        disabled={isFirstPage}
        className="inline-flex cursor-pointer border-none bg-transparent p-0 disabled:cursor-default disabled:opacity-50"
      >
        Previous
      </button>
      <button
        onClick={handleLoadNext}
        disabled={isLastPage}
        className="inline-flex cursor-pointer border-none bg-transparent p-0 disabled:cursor-default disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};
