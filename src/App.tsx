import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomeLayout } from './layout/HomeLayout';
import { Panel } from './pages/Panel';
import { Otros } from './pages/Otros';
import { Dispositivos } from './pages/Dispositivos';
import { Facturacion } from './pages/Facturacion';
import { Stock } from './pages/Stock';
import { Ajustes } from './pages/Ajustes';



function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout/>} />
      <Route path="/panel" element={<Panel/>}/>
      <Route path="/dispositivos" element={<Dispositivos/>}/>
      <Route path="/facturacion" element={<Facturacion/>}/>
      <Route path="/stock" element={<Stock/>}/>
      <Route path="/ajustes" element={<Ajustes/>}/>
      <Route path="/otros" element={<Otros/>}/>
    </Routes>
  );
}

export default App;