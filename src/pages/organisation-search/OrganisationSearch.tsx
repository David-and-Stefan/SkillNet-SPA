import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { axiosInstance } from '../../components/axios-interceptor/AxiosInterceptor';
import { buildUrl } from '../../utils/url';
import OrganisationSearchCard from './components/organisation-search-card/OrganisationSearchCard';
import OrganisationSearchInput from './components/organisation-search-input/OrganisationSearchInput';

function OrganisationSearch() {
  const [page, setPage] = useState(0);
  const [searchParams] = useSearchParams();

  const fetchProjects = useCallback(
    (page = 0) =>
      axiosInstance.get(
        buildUrl('/o', { ...Object.fromEntries(searchParams), page })
      ),
    [searchParams]
  );

  const { isPending, isError, error, data } = useQuery({
    queryKey: ['org_search', page],
    queryFn: () => fetchProjects(page),
    placeholderData: keepPreviousData,
  });

  return (
    <>
      {isPending ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
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
      )}
    </>
  );
}

export default OrganisationSearch;
