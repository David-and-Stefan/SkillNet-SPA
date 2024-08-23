import { Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <main className="w-screen text-black">
      <Sidebar />
      <Routes>
        {/* <Route path={RoutePage.HOME} element={<Home />} /> */}
      </Routes>
    </main>
  );
}

export default App;
