import React, {useContext} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './Navbar.js'
import ready from './images/readyfortomorrow.mp3'
import house from "./images/yourhouse.mp3"
import rebecca from './images/Rebecca.png'
import lucy from './images/Lucy.png'
import david from './images/david.png'
import kiwi from './images/kiwi.png'
import maine from './images/maine.png'
import sasha from './images/sasha.png'

export default function Home(){
    return (
        <div>
            
            <body>
            
                <header className="border-bottom secondary">
                    <h1>CYBERPUNK</h1>
                </header>
                <Navbar />
                <section className="wrap">
                    <div className="wide">
                        <h2 className="NAMES">✭┈┈┈┈CYBERPUNK┈┈REBECCA┈┈┈✭</h2>
                        <p className="pfont">Rebecca is a very sharp-tongued young woman, 
                            and has a tendency to be extreme and unpredictable. 
                            She is often shown going all out in fights, 
                            sometimes even laughing manically. Nevertheless, 
                            Rebecca is loyal and does everything for the crew of Maine, 
                            including supporting newcomer David where she can.</p>
                    </div>
                    <img className="narrow" src={rebecca} alt={''} />
                </section>

                <section className="wrap">
                    <div className="wide">
                    <h2 className="NAMES">✭┈┈┈┈CYBERPUNK┈┈LUCY┈┈┈✭</h2>
                        <p className="pfont">Lucy Kushinada, more commonly known as just Lucy, 
                        is a hacking legend character in the adaptation anime 
                        of Cyberpunk 2077, Cyberpunk: Edgerunners. In the anime, 
                        she's a mysterious Netrunner from Night City and a character 
                        with quite an introverted personality who doesn't like to 
                        talk much about her past​​​.</p>
                    </div>
                    <img className="Cyberlucy" src={lucy} alt={''} />
                </section>

                <section className="wrap">
                <div className="wide">
                    <h2 className="NAMES">✭┈┈┈┈CYBERPUNK┈┈DAVID┈┈┈✭</h2>
                    <p className="pfont">David Martinez is the protagonist of Cyberpunk Edgerunners. 
                        He became a mercenary and a member of Maine's edgerunner 
                        crew in 2076, when he was involved in a series of harrowing 
                        events that resulted in him attaining the status of a Night City
                        legend.</p>
                </div>
                <img className="narrow" src={david} alt={''} />
                </section>

                <section className="wrap">
                    <img className="narrow" src={kiwi} alt={''}/>
                    <img className="narrow" src={maine} alt={''}/>
                    <img className="narrow" src={sasha} alt={''}/>
                </section>


                <footer className="border-top secondary">
                    <p>Created by Queen Lisa</p>
                </footer>

                <div style={{margin: "0 auto"}}>
                    <audio controls volume="0.01" autoPlay muted>
                        <source src={house} type="audio/mp3"/>
                        <source src={ready} type="audio/mp3"/>
                    </audio>
                </div>
            </body>
        </div>
    )
}
