import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Parent from './Components/Parent/Parent'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Parent />
    </>
  )
}

export default App
