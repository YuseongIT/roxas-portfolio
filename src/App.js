import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Home from './Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
