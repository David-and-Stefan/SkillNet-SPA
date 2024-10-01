import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import { ThemeProvider } from './contexts/ThemeProvider';
import Organisation from './pages/organisation/Organisation';
import { RoutePage } from './types';

function App() {
  return (
    <ThemeProvider>
      <main className="w-screen text-black dark:text-dark-300 flex justify-center align-middle bg-dark-100 dark:bg-black">
        <Sidebar />
        <div className="flex-1 p-10">
          <Routes>
            <Route
              path={RoutePage.ORGANISATION_SINGLE}
              element={<Organisation />}
            />
          </Routes>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
