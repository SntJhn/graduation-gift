import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 
'react-router-dom';
import Home from './components/pages/Home'
import Miss from './components/pages/Miss'
import Sad from './components/pages/Sad'
import Need from './components/pages/Need'
import Breakdown from './components/pages/Breakdown'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/sad' exact Component={Sad}/>
          <Route path='/miss' exact Component={Miss}/>
          <Route path='/need' exact Component={Need}/>
          <Route path='/breakdown' exact Component={Breakdown}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
