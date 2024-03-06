import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const usePagination = (
  totalItemsCount: number,
  pageItemsCount: number,
) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const pageParam = searchParams.get('page');
  const currentPage = pageParam ? Number(pageParam) : 1;
  const totalPages = Math.ceil(totalItemsCount / pageItemsCount);

  const setPageParam = (page: number) => `?page=${page}`;

  const getCurrentPageItems = <T>(items: T[]) => {
    const startIndex = (currentPage - 1) * pageItemsCount;
    const endIndex = startIndex + pageItemsCount;

    return items.slice(startIndex, endIndex);
  };

  const handleLoadPrevious = () => {
    if (currentPage === 1) {
      return;
    }

    navigate(setPageParam(currentPage - 1));
  };

  const handleLoadNext = () => {
    if (currentPage === totalPages) {
      return;
    }

    navigate(setPageParam(currentPage + 1));
  };

  useEffect(() => {
    if (isNaN(currentPage) || currentPage < 0) {
      navigate(setPageParam(1));
    }

    if (currentPage > totalPages) {
      navigate(setPageParam(currentPage - 1));
    }
  }, [currentPage, totalPages, navigate]);

  return {
    currentPage,
    totalPages,
    getCurrentPageItems,
    handleLoadPrevious,
    handleLoadNext,
  };
};
