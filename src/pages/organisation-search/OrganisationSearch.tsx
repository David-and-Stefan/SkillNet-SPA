import { Search } from 'lucide-react';
import OrganisationSearchCard from './components/organisation-search-card/OrganisationSearchCard';

function OrganisationSearch() {
  return (
    <section className="relative p-4">
      <div className="flex flex-row justify-between bg-white dark:bg-dark-950 rounded-lg">
        <div className="flex justify-between items-center w-full">
          <div className="ml-4 py-4 relative flex justify-center">
            <input
              type="text"
              placeholder="Search Organisations"
              className="p-3 pr-9 text-dark-200 rounded-md outline-none bg-transparent border rounded-r-none border-dark-500"
            />
            <button className=" bg-dark-500 text-dark-200 rounded-l-none rounded-md px-4">
              <Search />
            </button>
          </div>

          {/* <div className="flex text-white">
            <p>Sort By</p>
            <p>Alphabetical</p>
          </div> */}
        </div>
      </div>
      <div className="pt-4">
        <div className="flex items-center flex-wrap justify-between gap-5">
          <OrganisationSearchCard />
          <OrganisationSearchCard />
          <OrganisationSearchCard />
          <OrganisationSearchCard />
        </div>
      </div>
    </section>
  );
}

export default OrganisationSearch;
