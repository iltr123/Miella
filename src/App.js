import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<div>About Page Coming Soon</div>} />
          <Route path="/services" element={<div>Services Page Coming Soon</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
