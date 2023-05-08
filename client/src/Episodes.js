import React, {useContext} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './Navbar.js'
import ready from './images/readyfortomorrow.mp3'
import house from "./images/yourhouse.mp3"
import gang from "./images/cybergang.jpg"
import davidLucy from "./images/davidlucy.jpg"
import rebecca from './images/Rebecca.png'
import lucy from './images/Lucy.png'
import david from './images/david.png'
import kiwi from './images/kiwi.png'
import maine from './images/maine.png'
import sasha from './images/sasha.png'


// import { useMediaQuery } from 'react-responsive'


export default function Episodes(){
//   const { token, logout } = useContext(UserContext)
//   const isTabletOrMobile = useMediaQuery({ query: '(max-width: 550px)' })
  
  return (
    <div>
        <body>
            <header className="border-bottom secondary">
                <h1>CYBERPUNK</h1>
            </header> 

            <Navbar />

            <h2 className="TRAILER">Watch the trailer for Cyberpunk Edgerunners</h2>

            <p align="center"><iframe width="640" height="360"
            src="https://www.youtube.com/embed/JtqIas3bYhg">
            </iframe></p>

            <img className="cgang" src={gang} alt=""/>
            <img className="Chillin" src={davidLucy} alt=""/>


            <section className="wrap">
                <img className="narrow" src={kiwi} alt={''}/>
                <img className="narrow" src={maine} alt={''}/>
                <img className="narrow" src={sasha} alt={''}/>
            </section>


            <footer className="border-top secondary">
                <p>Created by Queen Lisa</p>
            </footer>

            
            <div style={{margin: "0 auto"}}>
                <audio controls volume="0.01" autoplay loop muted>
                    <source src={house} type="audio/mp3"/>
                    <source src={ready} type="audio/mp3"/>
                </audio>
            </div>
        </body>
    </div>
    )
}