import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from './asset/Sidebar/Sidebar';
import Home from './asset/Home/Home';
import Login from './asset/Login/Login';

function App() {
    const[toggle, setToggle]=useState(true)
    const Toggle = () =>{
      setToggle(!toggle)
    }
  return (
    // <div className='container-fluid bg-secondary min-vh-100'>
    //   <div className='row'>
    //     {toggle && <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
    //       <Sidebar/>
    //     </div>}
    //     {toggle &&<div className='col-4 col-md-2'></div>}
    //     <div className='col'>
    //       <Home Toggle={Toggle}/>
    //     </div>
    //   </div>
      
    // </div>
    <div>
      <Login/>
    </div>
    
  );
}

export default App;
