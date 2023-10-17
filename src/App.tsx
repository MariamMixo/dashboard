import { Route, Routes} from 'react-router-dom';

import './App.css'
import Home from './components/Home /Home'
import Machine from './components/Machine/Machine';


const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={< Machine/>} />
      </Routes>
    </>
  )
}

export default App
