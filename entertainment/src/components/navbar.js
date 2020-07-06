import React from 'react'

import logo from '../img/mkb.png'
const Navbar = () => {
    return ( 
        <nav>
       <div className="navbar col-12">
        
           <img className="logo mr-auto" src={logo} alt=""/>
           <ul className=" items navbar-nav ml-auto">
             <button className="btn btn-half" href="#">Home</button>
             <button className="btn btn-half" href="#">Therapy</button>
             <button className="btn btn-half" href="#">Service</button>
             <button className="btn btn-half active" href="#">Entertainment</button>
           </ul>
         </div>
      
     </nav>
     );
}
 
export default Navbar;