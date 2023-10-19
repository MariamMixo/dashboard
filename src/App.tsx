import { Route, Routes } from 'react-router-dom';
import './App.css';

import { HomeLayout } from './layout/HomeLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
    </Routes>
  );
}

export default App;
