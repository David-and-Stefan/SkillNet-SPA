import { Search } from 'lucide-react';

function OrganisationSearchInput() {
  return (
    <div className="ml-4 py-4 relative flex justify-center">
      <input
        type="text"
        placeholder="Search Organisations"
        className="p-3 pr-9 text-indigo-800 border-indigo-200 dark:text-dark-200 dark:border-dark-700 rounded-md outline-none bg-transparent border rounded-r-none"
      />
      <button className="bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 dark:from-dark-700 dark:to-dark-600 dark:bg-dark-500 dark:text-dark-200 rounded-l-none rounded-md px-4">
        <Search />
      </button>
    </div>
  );
}

export default OrganisationSearchInput;
