
import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route, Link} from "react-router-dom";
import Home from './pages/Home'; 
import Create from './pages/Create';
import Edit from './pages/Edit';
import View from './pages/view';


function App() {
  return (
    <div>
   
   <nav className='navbar navbar-expand navbard-dark bg-dark'>
    <div className='navbar-nav mr-auto'>
      <li className='nav-item'>
      <Link to="/" className="nav-link" style={{ color: 'white' }}>Home</Link>
      </li>

      <li className='nav-item'>
      <Link to="/create" className="nav-link" style={{ color: 'white' }}>Create</Link>
      </li>

    </div>

   </nav>

   
   <div className='container'>
 
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Create />} />
      <Route path='/edit/:id' element={<Edit />} />
      <Route path='/view/:id' element={<View />} />


    </Routes>

   </div>
    </div>
  );
}

export default App;
