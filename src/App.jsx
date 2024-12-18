import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import NavBar from './components/NavBar'; 
import Home from './pages/Home'; 
import Cart from './pages/Cart'; 

function App() {
  return (
    <div>
      <NavBar />  
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
