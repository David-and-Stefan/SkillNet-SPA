interface OrganisationSearchPaginationButtonProps {
  currentPage: number;
  page: number;
}

export const COMMON_STYLES =
  'relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20';
export const NON_ACTIVE_STYLES =
  'text-gray-600 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-dark-600 hover:bg-gray-50 dark:hover:bg-dark-800 focus:outline-offset-0 cursor-pointer';
const ACTIVE_STYLES =
  'z-10 bg-indigo-600 dark:bg-dark-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';
function OrganisationSearchPaginationButton(
  props: OrganisationSearchPaginationButtonProps
) {
  const isActive = props.currentPage === props.page;

  const buttonClassName =
    COMMON_STYLES + ` ${isActive ? ACTIVE_STYLES : NON_ACTIVE_STYLES}`;

  return (
    <>
      <a
        aria-current={isActive ? 'page' : undefined}
        className={buttonClassName}>
        {props.page}
      </a>
    </>
  );
}

export default OrganisationSearchPaginationButton;
