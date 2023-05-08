import React, {useContext} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import { GameContext } from './context/GameProvider.js'
import Header from './components/Header.js'
import { useMediaQuery } from 'react-responsive'
import Footer from './components/Footer.js'

export default function App(){
//   const { token, logout } = useContext(UserContext)
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 550px)' })
  
  return (
    <div className="app">
        <Routes>
          <Route 
            path="/" 
            element={ token ? <Navigate to='/game'/> : <Auth />}
          />
          <Route 
            path="/game"
            element={<Game />}
          />
        </Routes>
        {/* { token && <Footer />} */}
      
    </div>
  )
}