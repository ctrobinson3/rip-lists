import './Components/Styles/app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SixMain from './Pages/CreateSixDive/SixMain'
import ElevenMain from './Pages/CreateElevenDive/ElevenMain'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className='app'>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-eleven' element={<ElevenMain />} />
        <Route path='/create-six' element={<SixMain />} />
      </Routes>
      <Navbar/>
    </Router>
    
    <div className='page-bottom-buffer'/>
    </div>
  );
}

export default App;
