// import React, { useState } from 'react';
import './Navbar.css';
// import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';


const Navbar = () => {


  return (
    <div className='Navbar'>
        
        <Navigation />
        <MobileNavigation />
</div>
    
  );
}


export default Navbar;


