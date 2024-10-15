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
import { getConfig } from './config'
import { Auth0Provider } from "@auth0/auth0-react";
import {createBrowserHistory} from "history";

const config = getConfig();

const onRedirectCallback = (appState: any) => {
  createBrowserHistory().push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const providerConfig: Auth0ProviderOptions = {
  domain: config.domain,
  clientId: config.clientId,
  onRedirectCallback,
  authorizationParams: {
    redirect_uri: window.location.origin
  }
  
};



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
        handle={{
          crumb: () => 'Organisations',
        }}
        children={
          <>
            <Route index element={<OrganisationSearch />} />
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
          </>
        }
      />
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
    </Route>
  )
);

function App() {
  return (
    <Auth0Provider {...providerConfig}>

      <ThemeProvider>
        <main className="w-screen text-black dark:text-dark-300 flex justify-center align-middle bg-dark-100 dark:bg-black">
          <Sidebar />
          <div className="flex-1 p-10 relative mt-3">
            <Breadcrumb />
            <Outlet />
          </div>
        </main>
      </ThemeProvider>
      </Auth0Provider>
  );
}
