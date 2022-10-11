
import './Main.css'
import Footer from './Footer'
import { useState } from 'react'


function Main () {
const[buttonLearnHover, setButtonLearnHover] = useState(false)

function toggleButtonChange () {
    setButtonLearnHover(true)
}

function toggleBackButtonChange () {
    setButtonLearnHover(false)
}

    return (
        <div className="main-container">
        <div className="text-content">
        <h1 className="h1-text">Make remote work</h1>
        <p className="lorem-text">Lorem ipsum dolor sit amet, tractatos incorrupte te per. Natum convenire vel ad, sea id facilisi. Solum consectetuer eu pri, iracundia his cu, et putant fuisset per. </p>
        <button className={buttonLearnHover ? "btn-learn-container btn-learn-hover" : "btn-learn-container"} onMouseEnter={toggleButtonChange} onMouseLeave={toggleBackButtonChange}>Learn more</button>
        </div>
        <Footer />
        </div>
    )
}

export default Main