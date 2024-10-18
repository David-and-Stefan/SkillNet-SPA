import { Search } from 'lucide-react';
import { FormEventHandler } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SEARCH_SEARCH_PARAM_KEY = 'Name';

function OrganisationSearchInput() {
  const [_, setSearchParams] = useSearchParams();

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const searchValue = formData.get(SEARCH_SEARCH_PARAM_KEY);

    setSearchParams((prev) => {
      if (!searchValue) {
        prev.delete(SEARCH_SEARCH_PARAM_KEY);
        return prev;
      }

      return {
        ...prev,
        [SEARCH_SEARCH_PARAM_KEY]: searchValue,
      };
    });
  };

  return (
    <form
      className="ml-4 py-4 relative flex justify-center"
      onSubmit={handleFormSubmit}>
      <input
        name={SEARCH_SEARCH_PARAM_KEY}
        type="text"
        placeholder="Search Organisations"
        className="p-3 pr-9 text-indigo-800 border-indigo-200 dark:text-dark-200 dark:border-dark-700 rounded-md outline-none bg-transparent border rounded-r-none"
      />
      <button
        type="submit"
        className="bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 dark:from-dark-700 dark:to-dark-600 dark:bg-dark-500 dark:text-dark-200 rounded-l-none rounded-md px-4">
        <Search />
      </button>
    </form>
  );
}

export default OrganisationSearchInput;
