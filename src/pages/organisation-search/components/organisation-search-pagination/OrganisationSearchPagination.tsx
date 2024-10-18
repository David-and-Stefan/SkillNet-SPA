import { ChevronLeft, ChevronRight } from 'lucide-react';
import OrganisationSearchPaginationButton, {
  COMMON_STYLES,
  NON_ACTIVE_STYLES,
} from './organisation-search-pagination-button/OrganisationSearchPaginationButton';

interface OrganisationSearchPaginationProps {
  onClickPreviousPage: () => any;
  onClickNextPage: () => any;
  onClickNavigatePage: (page: number) => any;
  currentPage: number;
  pageSize: number;
  resultCount: number;
}

function OrganisationSearchPagination(
  props: OrganisationSearchPaginationProps
) {
  const pageCount = Math.ceil(props.resultCount / props.pageSize);
  console.log(pageCount);

  return (
    <div className="flex items-center justify-between text-gray-600 dark:text-white bg-white p-5 dark:bg-dark-950 px-4 py-3 sm:px-6 rounded-lg">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          onClick={props.onClickPreviousPage}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Previous
        </a>
        <a
          onClick={props.onClickNextPage}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-white">
            Showing{' '}
            <span className="font-medium">
              {props.currentPage * props.pageSize + 1}
            </span>{' '}
            to{' '}
            <span className="font-medium">
              {(props.currentPage + 1) * props.pageSize}
            </span>{' '}
            of <span className="font-medium">{props.resultCount}</span> results
          </p>
        </div>
        <div>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            <a
              onClick={props.onClickPreviousPage}
              className={`${COMMON_STYLES}${NON_ACTIVE_STYLES} cursor-pointer`}>
              <span className="sr-only">Previous</span>
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </a>

            {[...new Array(pageCount)].map((_, i) => (
              <OrganisationSearchPaginationButton
                currentPage={props.currentPage + 1}
                page={i + 1}
              />
            ))}

            <span className={`${COMMON_STYLES}${NON_ACTIVE_STYLES}`}>...</span>

            <a
              onClick={props.onClickNextPage}
              className={`${COMMON_STYLES}${NON_ACTIVE_STYLES} cursor-pointer`}>
              <span className="sr-only">Next</span>
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default OrganisationSearchPagination;
