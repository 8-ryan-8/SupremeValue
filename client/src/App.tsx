import React from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import AddReview from './pages/AddReview/AddReview';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/addReview" element={<AddReview/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
