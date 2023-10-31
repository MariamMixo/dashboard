import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomeLayout } from './layout/HomeLayout';
import { PanelComponent } from './components/PanelComponent';



function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout/>} />
      <Route path="panel" element={<PanelComponent/>} />
    </Routes>
  );
}

export default App;