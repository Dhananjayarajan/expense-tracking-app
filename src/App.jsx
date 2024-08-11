import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Hero from './components/Hero';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
      </Routes>

    </Router>

  );
}

export default App;
