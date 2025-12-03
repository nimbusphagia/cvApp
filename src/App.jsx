import { useState } from 'react'
import './styles/App.css'
import Curriculum from './components/Curriculum'
import Navbar from './components/Navbar';
function App() {
  const renderDisplay = () => {
    return null;
  }
  return (
    <>
      <Navbar></Navbar>
      <Curriculum
        handleDisplay={renderDisplay}
      ></Curriculum>
    </>
  )
}

export default App
