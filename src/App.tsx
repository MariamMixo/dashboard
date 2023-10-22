import { Route, Routes } from 'react-router-dom';
import './App.css';

import { HomeLayout } from './layout/HomeLayout';
import MachineComponent from './components/MachineComponent';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="machine" element={<MachineComponent />} />
    </Routes>
  );
}

export default App;
