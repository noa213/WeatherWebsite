// nimport React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import City from "./components/city.js";

import Clients from "./components/clients.js";
import Client from "./components/client.js";
import Add from "./components/add.js";
import Update from "./components/update.js";
import './App.css';


function App() {
  return (
    <div>
      <h2>תחזית מסביב לעולם</h2>

      <BrowserRouter>
        <Routes>
          {/* לשנות את הניתוב למזג אויר */}
          <Route path='/' element={<Navigate to='/health-funds.co.il/clients' replace />} />
          <Route path='/health-funds.co.il/clients' exact element={<City />} />
          {/* <Route path='/health-funds.co.il/clients/:client' element={<Client />} />
          <Route path='/health-funds.co.il/clients/add' exact element={<Add />} /> 
          <Route path='/health-funds.co.il/clients/:client/update' element={<Update />} />  */}
        </Routes>
      </BrowserRouter>

    </div>);
}

export default App;
