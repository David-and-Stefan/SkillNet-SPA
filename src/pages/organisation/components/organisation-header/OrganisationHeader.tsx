import { CirclePlus, Ellipsis } from 'lucide-react';
import OrganisationHeaderButton from './organisation-header-button/OrganisationHeaderButton';
import OrganisationHeaderStat from './organisation-header-stat/OrganisationHeaderStat';

function OrganisationHeader() {
  return (
    <div className="relative p-4 bg-white dark:bg-dark-950 rounded-2xl">
      <div className="bottom-4 left-4">
        <div className="flex flex-row justify-between">
          <div className="ml-4">
            <h1 className="text-2xl font-bold">Test organisation</h1>
            <p className="text-indigo-400 dark:text-dark-300">
              ALL MEMBERS WELCOME!
            </p>
          </div>
          <div className="flex space-x-8">
            <OrganisationHeaderStat title="members" value="139" />
            <OrganisationHeaderStat title="posts" value="105" />
            <OrganisationHeaderStat title="visits" value="7.3k" />

            <div className="flex gap-3 items-center ">
              <OrganisationHeaderButton content={<CirclePlus />} />
              <OrganisationHeaderButton content={<Ellipsis />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganisationHeader;
