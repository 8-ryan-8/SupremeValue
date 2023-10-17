import React from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import AddReview from './pages/AddReview/AddReview';
import Home from './pages/Home/Home';
import MyReviews from './pages/MyReviews/MyReviews';
import Profile from './pages/Profile/Profile';
import { Route, Routes } from 'react-router-dom'

// branch protection test 2.o

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/addReview" element={<AddReview/>}></Route>
          <Route path="/myReviews" element={<MyReviews/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>

        </Routes>
      </div>
    </>
  );
}

export default App;
