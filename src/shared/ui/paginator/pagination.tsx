import type { MouseEvent } from 'react';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../pagination';

type Props = {
  page: number;
  total: number;
  limit: number;
  onPage: (page: number) => void;
  siblingCount?: number;
};

function getPaginationRange(
  currentPage: number,
  totalPages: number,
  siblingCount = 1,
): (number | 'ellipsis')[] {
  if (totalPages <= 1) {
    return [];
  }

  const totalVisible = siblingCount * 2 + 5;

  if (totalPages <= totalVisible) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const leftSibling = Math.max(currentPage - siblingCount, 1);
  const rightSibling = Math.min(currentPage + siblingCount, totalPages);

  const showLeftEllipsis = leftSibling > 2;
  const showRightEllipsis = rightSibling < totalPages - 1;

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftItemCount = 3 + siblingCount * 2;
    const leftRange = Array.from({ length: leftItemCount }, (_, index) => index + 1);

    return [...leftRange, 'ellipsis', totalPages];
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightItemCount = 3 + siblingCount * 2;
    const rightRange = Array.from(
      { length: rightItemCount },
      (_, index) => totalPages - rightItemCount + index + 1,
    );

    return [1, 'ellipsis', ...rightRange];
  }

  const middleRange = Array.from(
    { length: rightSibling - leftSibling + 1 },
    (_, index) => leftSibling + index,
  );

  return [1, 'ellipsis', ...middleRange, 'ellipsis', totalPages];
}

export function PaginationUI({
  page,
  total,
  limit,
  onPage,
  siblingCount = 1,
}: Props) {
  if (total <= 0 || limit <= 0) {
    return null;
  }

  const totalPages = Math.ceil(total / limit);
  const currentPage = Math.min(Math.max(page, 1), totalPages);

  if (totalPages <= 1) {
    return null;
  }

  const pages = getPaginationRange(currentPage, totalPages, siblingCount);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  function handlePageChange(nextPage: number, event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    if (nextPage === currentPage || nextPage < 1 || nextPage > totalPages) {
      return;
    }

    onPage(nextPage);
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            aria-disabled={isFirstPage}
            tabIndex={isFirstPage ? -1 : undefined}
            className={isFirstPage ? 'pointer-events-none opacity-50' : undefined}
            onClick={(event) => handlePageChange(currentPage - 1, event)}
          />
        </PaginationItem>

        {pages.map((item, index) => (
          <PaginationItem key={item === 'ellipsis' ? `ellipsis-${index}` : item}>
            {item === 'ellipsis' ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href="#"
                isActive={item === currentPage}
                onClick={(event) => handlePageChange(item, event)}
              >
                {item}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href="#"
            aria-disabled={isLastPage}
            tabIndex={isLastPage ? -1 : undefined}
            className={isLastPage ? 'pointer-events-none opacity-50' : undefined}
            onClick={(event) => handlePageChange(currentPage + 1, event)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
