import React from 'react';

import './App.css';

import Navbar from './components/navbar';
import Heading from './components/heading';
import Content from './components/content';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Heading/>
     <Content/>
  </div>
  );
}

export default App;
