import React, {useContext} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Episodes from './Episodes.js'
import Home from './Home.js'
import Navbar from './Navbar.js'

export default function App(){

    return (
        <div>
            <Routes className = "routes">
                <Route index path = "/" element = {<Home />} />
                <Route path = "/episodes" element = {<Episodes />} />
            </Routes>
        </div>
    )
}