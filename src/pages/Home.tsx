import { Box } from '@mui/material'
import React from 'react'
import Exercises from '../components/Exercises'
import SearchExecise from '../components/SearchExecise'
import HeroBanner from '../components/HeroBanner'

const Home = () => {
  return (
    <Box>
      <HeroBanner /> 
      <SearchExecise /> 
      <Exercises /> 
    </Box>
  )
}

export default Home
 