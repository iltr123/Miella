import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Produits from './pages/Produits';
import ProduitDetails from './pages/ProduitDetails';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/produits" element={<Produits/>} />
      
          <Route path="/produitdetails/:id" element={<ProduitDetails />} />
          <Route path="/services" element={<div>Services Page Coming Soon</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
