import { Route, Routes } from 'react-router-dom';

import './App.css';

import Home from './components/Home /Home';
import Navbar from './components/Navbar/Navbar';
import Machine from './components/Machine/Machine';
import Finance from './components/Finance/Finance';
import Calendar from './components/Calendar/Calendar';
import Stock from './components/Stock/Stock';
import Workers from './components/Workers/Workers';

/*function App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={< Machine/>} />
        <Route path="*" element={< Navbar/>} />
      </Routes>
    </>
  )
}
*/
function App() {
  const menuItems = ['Home', 'Machines', 'Stock', 'Calendar', 'Workers', 'Finance'];
  const employees = [
    { id: 1, name: 'Anna x', salary: 30000 },
    { id: 2, name: 'Jane Y', salary: 20000 },
  ];

  return (
    <Routes>
      <Route path="/" element={<Navbar items={menuItems} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/machine" element={<Machine text="Machine" />} />
      <Route path="/stock" element={<Stock volume={5} />} />
      <Route path="/calendar" element={<Calendar date={10 / 12 / 2023} />} />
      <Route path="/finance" element={<Finance count={1} />} />
      <Route path="/workers" element={<Workers workers={employees} />} />
    </Routes>
  );
}

export default App;
