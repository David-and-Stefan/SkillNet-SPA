import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import { RoutePage } from './types';

function App() {
  return (
    <>
      <Routes>
        <Route path={RoutePage.HOME} element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
