import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  return (
    <div className='butt-links'>
      <h4 className="button-link" onClick = {() => navigate("/")} style={{color: '#ff00ee'}}>Home</h4>
      <h4 className="button-link" onClick = {() => navigate("/episodes")} style={{color: '#ff00ee'}}>Click to view Page2</h4>
    </div>
  )
}

export default Navbar