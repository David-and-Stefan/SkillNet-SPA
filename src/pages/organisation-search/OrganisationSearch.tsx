import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { axiosInstance } from '../../components/axios-interceptor/AxiosInterceptor';
import { validatePage } from '../../utils/page';
import { buildUrl } from '../../utils/url';
import OrganisationSearchCard from './components/organisation-search-card/OrganisationSearchCard';
import OrganisationSearchInput from './components/organisation-search-input/OrganisationSearchInput';
import OrganisationSearchPagination from './components/organisation-search-pagination/OrganisationSearchPagination';

const PAGE_SIZE = 6;
const PAGE_SEARCH_PARAM_KEY = 'page';

function OrganisationSearch() {
  // TODO: Make pages start from 1
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(() => {
    const page = searchParams.get(PAGE_SEARCH_PARAM_KEY);

    if (!page) {
      return 0;
    }

    return Number(page);
  });

  const [pageCount, setPageCount] = useState(4);

  const fetchProjects = useCallback(async () => {
    const response = await axiosInstance.get(buildUrl('/o', searchParams));

    const size = 23;
    const pageCount = Math.ceil(size / PAGE_SIZE);

    setPageCount(pageCount);
    setPage((prevPage) => validatePage(pageCount, prevPage));

    return response;
  }, [searchParams, setPage, setPageCount, validatePage]);

  const { isPending, isError, error, data } = useQuery({
    queryKey: ['org_search', page],
    queryFn: () => fetchProjects(),
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    setSearchParams((prev) => ({
      ...prev,
      page,
    }));
  }, [page]);

  const navigateToPage = useCallback(
    (page: number) => {
      setPage(validatePage(pageCount, page));
    },
    [setPage]
  );

  return (
    <>
      {isPending ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <></>
      )}
      <section className="relative p-4">
        <div className="flex flex-row justify-between bg-white dark:bg-dark-950 rounded-lg">
          <div className="flex justify-between items-center w-full">
            <OrganisationSearchInput />
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
        <div className="pt-4">
          <OrganisationSearchPagination
            onClickNavigatePage={navigateToPage}
            pageCount={pageCount}
            pageSize={PAGE_SIZE}
            currentPage={page}
            resultCount={23}
          />
        </div>
      </section>
    </>
  );
}

export default OrganisationSearch;
