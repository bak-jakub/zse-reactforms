
import React from 'react';
import {Router, Route, Routes,Link} from 'react-router-dom';
import Main from './pages/Main';
import Form from './pages/Form';
import Help from './pages/Help';
import { BrowserRouter } from 'react-router-dom';

//let tasks = require('./assets/tasks.json');


function App() {
  
  return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/form/:id/:unit7/:name?" element={<Form />} />
        <Route path="/help" element={<Help />} />
        
      </Routes>
    
  );
}

export default App;
