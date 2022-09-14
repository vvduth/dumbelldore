import React from 'react';

import './App.css';
import {Box} from '@mui/material'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <Box width="400px">
      NavBar
      <Routes>
        <Route path="/" element={<NavBar />}/>
        <Route path="/exercise/:id" />
      </Routes>
    </Box>
  );
}

export default App;
