import { usePageInfoContext } from '../../contexts/PageInfoContext';

interface BreadcrumbProps {}

function Breadcrumb() {
  const { pagePaths } = usePageInfoContext();

  return (
    <ol className="flex items-center whitespace-nowrap absolute top-0">
      <li className="inline-flex items-center">
        <a
          className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
          href="#">
          Home
        </a>
        <svg
          className="shrink-0 size-5 text-gray-400 dark:text-neutral-600 mx-2"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true">
          <path
            d="M6 13L10 3"
            stroke="currentColor"
            stroke-linecap="round"></path>
        </svg>
      </li>
      <li className="inline-flex items-center">
        <a
          className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
          href="#">
          App Center
          <svg
            className="shrink-0 size-5 text-gray-400 dark:text-neutral-600 mx-2"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path
              d="M6 13L10 3"
              stroke="currentColor"
              stroke-linecap="round"></path>
          </svg>
        </a>
      </li>
      <li
        className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200"
        aria-current="page">
        Application
      </li>
    </ol>
  );
}

export default Breadcrumb;
