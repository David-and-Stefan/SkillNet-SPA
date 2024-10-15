import { Params, useMatches } from 'react-router-dom';
import BreadcrumbItem from './breadcrumb-item/BreadcrumbItem';

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

  const filteredMatches = matches.filter((match) =>
    Boolean(match.handle && (match.handle as HandleType).crumb)
  );

  return (
    <ol className="flex items-center whitespace-nowrap absolute top-0">
      {filteredMatches.map((match, i, arr) => {
        const crumb = (match.handle as HandleType).crumb(
          match.data as string | undefined
        );

        return (
          <BreadcrumbItem
            key={match.id}
            pathname={match.pathname}
            crumb={crumb}
            isCurrentPage={i === arr.length - 1}
            isOne={arr.length === 1}
          />
        );
      })}
    </ol>
  );
}

export default Breadcrumb;
