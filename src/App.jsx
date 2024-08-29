import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartSketch from './pages/StartSketch';
import Home from './pages/Home';
import './App.css';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<StartSketch />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
