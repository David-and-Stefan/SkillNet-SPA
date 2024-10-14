import { Link } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';

interface BreadcrumbItemProps {
  crumb: React.ReactNode;
  pathname: string;
  isCurrentPage: boolean;
  isOne: boolean;
}

function BreadcrumbItem(props: BreadcrumbItemProps) {
  let liClasses = 'flex items-center';
  if (props.isCurrentPage) {
    liClasses +=
      ' text-sm font-semibold text-gray-800 truncate dark:text-neutral-200';
  }

  return (
    <li className={liClasses}>
      {!props.isCurrentPage ? (
        <>
          <Link
            className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
            aria-current="page"
            to={props.pathname}>
            {props.crumb}
          </Link>
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
              strokeLinecap="round"></path>
          </svg>
        </>
      ) : (
        <Fragment>{props.crumb}</Fragment>
      )}
    </li>
  );
}

export default BreadcrumbItem;
