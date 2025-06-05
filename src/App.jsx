import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AboutMe from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Project';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#021323]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe/>}/>
          <Route path="/project" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
