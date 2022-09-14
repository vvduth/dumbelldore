import React from 'react';

import './App.css';
import {Box} from '@mui/material'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Box width="400px" sx={{width:{xl: '1488px'}}} m="auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/exercise/:id" element={<ExerciseDetail />}/>
      </Routes>
      <Footer /> 
    </Box>
  );
}

export default App;
