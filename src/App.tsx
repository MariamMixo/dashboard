import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomeLayout } from './layout/HomeLayout';
import { Panel } from './pages/Panel';
import { Dispositivos } from './pages/Dispositivos';
import { Facturacion } from './pages/Facturacion';
import { Stock } from './pages/Stock';
import { Ajustes } from './pages/Ajustes';
import { Otros } from './pages/Otros';





function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout/>} />
      <Route path="/panel" element={<Panel/>}/>
      <Route path="/panel" element={<Dispositivos/>}/>
      <Route path="/panel" element={<Facturacion/>}/>
      <Route path="/panel" element={<Stock/>}/>
      <Route path="/panel" element={<Ajustes/>}/>
      <Route path="/otros" element={<Otros/>}/>
    </Routes>
  );
}

export default App;