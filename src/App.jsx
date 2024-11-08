import React, { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import './App.css'
import Landing from './pages/Landing.jsx'
import Emporium from './pages/Emporium.jsx'
import Latest from './pages/Latest.jsx'



const App = () => {
  const [pageNumber,setPageNumber]=useState(0)
  
  return (
    <>
  <Header setPageNumber={setPageNumber}/>
  {pageNumber==0 && <Landing className='fade-in'/>}
  {pageNumber==1 && <Emporium className='fade-in'/>}
  {pageNumber==2 && <Latest className='fade-in'/>}
 </>
  )
}

export default App