import React from 'react';

import './App.css';

import Header from './Components/Header/Header';
import Compose from './Components/Compose/Compose';
import Posts from './Components/Content/Content';


function App() {
  return (
    <div className="App">
      <Header />
      <Compose />
      <Posts />
    </div>
  );
}


export default App;
