import { Binoculars } from 'lucide-react';
import OrganisationSearchCardStat from './organisation-search-card-stat/OrganisationSearchCardStat';

function OrganisationSearchCard() {
  return (
    <article
      style={{ width: 'calc(33.3333% - 1.25rem)' }}
      className="flex flex-col items-center justify-between gap-7 text-gray-600 dark:text-white bg-white p-5 dark:bg-dark-950 rounded-lg">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-xl">Cosplayers of the World</h1>
        <h6 className="text-indigo-800 dark:text-dark-300">
          All cosplayers welcome!
        </h6>
      </div>
      <div className="flex gap-5 justify-center">
        <OrganisationSearchCardStat title="members" value="139" />
        <OrganisationSearchCardStat title="posts" value="105" />
        <OrganisationSearchCardStat title="visits" value="7.3k" />
      </div>
      <button className="flex gap-2 px-4 py-2 w-3/4 justify-center items-center rounded-lg bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 dark:from-dark-700 dark:to-dark-600 dark:text-dark-200">
        <Binoculars />
        View Organisation
      </button>
    </article>
  );
}

export default OrganisationSearchCard;
