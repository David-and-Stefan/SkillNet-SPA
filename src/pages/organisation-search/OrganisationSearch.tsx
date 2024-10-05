import { Search } from 'lucide-react';

function OrganisationSearch() {
  return (
    <section className="relative p-4 bg-white dark:bg-dark-950 rounded-lg">
      <div className="flex flex-row justify-between">
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

          <div className="flex text-white">
            <p>Sort By</p>
            <p>Alphabetical</p>
          </div>
        </div>
        <div className="flex space-x-8"></div>
      </div>
    </section>
  );
}

export default OrganisationSearch;
