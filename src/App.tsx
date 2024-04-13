import './App.css'
import React, { useState } from 'react';
import Header from './Header'
import Modal from './Modal'
import Play from './Play'

function App() {
  const [score, setScore] = useState(0);

  return (
    <>
      <Header/>
      <Play />
      
    </>
  )
}

export default App
