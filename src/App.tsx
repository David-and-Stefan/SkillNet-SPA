import { Route, Routes } from 'react-router-dom';
import Breadcrumb from './components/breadcrumb/Breadcrumb';
import Sidebar from './components/sidebar/Sidebar';
import { PageInfoProvider } from './contexts/PageInfoContext';
import { ThemeProvider } from './contexts/ThemeContext';
import OrganisationSearch from './pages/organisation-search/OrganisationSearch';
import OrganisationSingle from './pages/organisation-single/OrganisationSingle';
import { RoutePage } from './types';

function App() {
  return (
    <ThemeProvider>
      <PageInfoProvider>
        <main className="w-screen text-black dark:text-dark-300 flex justify-center align-middle bg-dark-100 dark:bg-black">
          <Sidebar />
          <div className="flex-1 p-10 relative mt-3">
            <Breadcrumb />
            <Routes>
              <Route
                path={RoutePage.ORGANISATION_SEARCH}
                element={<OrganisationSearch />}
              />
              <Route
                path={RoutePage.ORGANISATION_SINGLE}
                element={<OrganisationSingle />}
              />
            </Routes>
          </div>
        </main>
      </PageInfoProvider>
    </ThemeProvider>
  );
}

export default App;
