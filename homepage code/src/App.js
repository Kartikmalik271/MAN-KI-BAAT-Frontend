import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Uppercloud from './components/Uppercloud';
import Howitworks from './components/Howitworks';
import Service from './components/Service';
import Therapy from './components/Therapy';
import Sepratingwaves from './components/Sepratingwaves';
import Blogs from './components/Blogs';
import Speak from './components/Speak';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import Sepratingclouds from './components/Sepratingclouds';



function App() {
  return (
    <div className="App">

      <Navbar/>
      <Uppercloud/>
      <Login/>
      <Sepratingclouds/>
      <Howitworks/>
      <Sepratingwaves/>
      <Service/>
      <Sepratingclouds/>
      <Therapy/>
      <Sepratingwaves/>
       <Blogs/>
       <Sepratingclouds/>
       <Speak/>
       <Sepratingwaves/>
       <Contactus/>
       <Footer/>
           
       
   
    </div>
  );
}

export default App;
