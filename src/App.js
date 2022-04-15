import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SixMain from './Pages/CreateSixDive/SixMain'
import ElevenMain from './Pages/CreateElevenDive/ElevenMain'
import Home from './Pages/Home/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-eleven' element={<ElevenMain />} />
        <Route path='/create-six' element={<SixMain />} />
      </Routes>
    </Router>
  );
}

export default App;
