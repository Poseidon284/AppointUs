import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Herosection from "./components/Herosection";
import Home from "./components/Pages/Home";
import Services from './components/Pages/Services';
import Login from './components/Pages/Login';
import Entrypage from './components/Pages/Entrypage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Entrypage' element={<Entrypage />} />


      </Routes>
    </Router>
  );
}

export default App;
