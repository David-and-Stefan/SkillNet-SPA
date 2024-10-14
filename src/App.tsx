import {
  createBrowserRouter,
  createRoutesFromChildren,
  Outlet,
  Route,
} from 'react-router-dom';
import Breadcrumb from './components/breadcrumb/Breadcrumb';
import Sidebar from './components/sidebar/Sidebar';
import { ThemeProvider } from './contexts/ThemeContext';
import OrganisationSearch from './pages/organisation-search/OrganisationSearch';
import OrganisationSingle from './pages/organisation-single/OrganisationSingle';
import { RoutePage } from './types';

export const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route
      path={RoutePage.HOME}
      element={<App />}
      handle={{
        crumb: () => 'Home',
      }}>
      <Route
        path={RoutePage.ORGANISATION_SEARCH}
        element={<OrganisationSearch />}
        handle={{
          crumb: () => 'Organisations',
        }}
        children={
          <Route
            path={RoutePage.ORGANISATION_SINGLE}
            element={<OrganisationSingle />}
            loader={async (data) => data.params.orgId}
            handle={{
              crumb: (organisationId: string) => (
                <span>Single - {organisationId} </span>
              ),
            }}
          />
        }
      />
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider>
      <main className="w-screen text-black dark:text-dark-300 flex justify-center align-middle bg-dark-100 dark:bg-black">
        <Sidebar />
        <div className="flex-1 p-10 relative mt-3">
          <Breadcrumb />
          <Outlet />
        </div>
      </main>
    </ThemeProvider>
  );
}
