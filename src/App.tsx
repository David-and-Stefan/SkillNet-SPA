import { Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import { ThemeProvider } from './contexts/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <main className="w-screen text-black dark:text-dark-300">
        <Sidebar />

        <Routes>
          {/* <Route path={RoutePage.HOME} element={<Home />} /> */}
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
