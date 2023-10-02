
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaHome, FaDashboard, FaFirstOrder, FaCog, FaBookmark } from 'react-icons/fa';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js'
// import 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'
import './Sidevar0.css';

const Navbar = () => {
  
  return (
    <div > 
       <div className="d-flex flex-column flex-shrink-0  vh-100" style={{ width: '100px', background: '#0D955C' }}>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
            <li className="nav-item"> <a href="http" className="nav-link active py-3 border-bottom"> <FaHome /> </a> </li>
            <li className="nav-item"> <a href="http" className="nav-link py-3 border-bottom"> <FaBookmark />  </a> </li>
        </ul>
        
    </div>
    </div>
  );
};

export default Navbar;
