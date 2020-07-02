import React from 'react';


 const Navbar = () => {
   
     return ( 
        <div className='navbar'>
        <ul>
        <li><button href='#' className='btn'>Home</button></li>
        <li><button href='#' className='btn'>About</button></li>
        <li><button href='#' className='btn'>Profile</button></li>
        <li><button href='#' className='btn'>Services</button></li>
        </ul>
        <div className='logo'>
          <img src="img/mkb.png" alt="logo"/>
        </div>
       
       
      </div>
      
      );
 }
  
 export default Navbar;