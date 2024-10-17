import OrganisationSearchCard from './components/organisation-search-card/OrganisationSearchCard';
import OrganisationSearchInput from './components/organisation-search-input/OrganisationSearchInput';

function OrganisationSearch() {
  return (
    <section className="relative p-4">
      <div className="flex flex-row justify-between bg-white dark:bg-dark-950 rounded-lg">
        <div className="flex justify-between items-center w-full">
          <OrganisationSearchInput />

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
