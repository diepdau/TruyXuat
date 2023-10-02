
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Login from './asset/Login/Login';
import ForgotPasswordPage from './asset/Login/ForgotPassword.jsx'
import Register from './asset/Register/register';
import Home from './asset/Home/Home.js'

function App() {

  return (
    <Router>
      <Routes>
         <Route path="/home" element={<Home/>} />
        </Routes>
        <Routes>
         <Route path="/" element={<Login />} />
        </Routes>

        <Routes>
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
      <Routes>
        <Route path="/create-account" element={<Register />} />
      </Routes>

</Router>


  );
}

export default App;