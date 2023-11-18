
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import Home from './Home';
import Login from './Login';
import BitcoinRates from './BitcoinRates';
import PostList from './PostList';
import About from './About';
import Box from './Box.css';

function App() {
  return (
    //<Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/BitcoinRates" element={<BitcoinRates />} />
          <Route path="/PostList" element={<PostList />}  />
          <Route path="/About" element={<About />}    />        
        </Routes>
      </div>
    //</Router>
  );
}

export default App
