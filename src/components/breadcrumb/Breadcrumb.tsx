import { Params, useMatches } from 'react-router-dom';

interface IMatches {
  id: string;
  pathname: string;
  params: Params<string>;
  data: unknown;
  handle: unknown;
}

type HandleType = {
  crumb: (param?: string) => React.ReactNode;
};

function Breadcrumb() {
  const matches: IMatches[] = useMatches();

  const crumbs = matches
    .filter((match) =>
      Boolean(match.handle && (match.handle as HandleType).crumb)
    )
    .map((match) => {
      console.log(match);

      const crumb = (match.handle as HandleType).crumb(
        match.data as string | undefined
      );

      return crumb as React.ReactNode;
    });

  console.log(crumbs);

  return (
    <ol className="flex items-center whitespace-nowrap absolute top-0">
      {crumbs.map((crumb, index) => (
        <li key={index}>{crumb}</li>
      ))}
      {/* {pagePaths.map((x, i, arr) => (
        <BreadcrumbItem
          key={`${x.path}${x.breadcrumbName}`}
          pagePath={x}
          isCurrentPage={i === arr.length - 1}
          isOne={arr.length === 1}
        />
      ))} */}
      {/* <li className="inline-flex items-center">
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
      </li> */}
    </ol>
  );
}

export default Breadcrumb;
