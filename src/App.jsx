import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartSketch from './pages/StartSketch';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartSketch />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
