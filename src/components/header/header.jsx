import logo from '../../assets/Logo1.png'
import logoBurger from '../../assets/Icon (3).png'
import './header.css'
import { useState } from 'react'

function Header() {
    const [burger, setBurger] = useState(false)

    const trueFunction = () => {
        setBurger(true)
    }

    const falseFunction = () => {
        setBurger(false)
    }

    return (
        <div className="header_container">
            <div className="logo">
                <img src={logo} alt="(x_x)" className="logo_img" />
                <p className="logo_title">HackBounty</p>
            </div>
            <ul className="ull">
                <button className="ull_li active">Home</button>
                <button className="ull_li">Services</button>
                <button className="ull_li">Work</button>
                <button className="ull_li">Process</button>
                <button className="ull_li">About</button>
                <button className="ull_li">Careers</button>
            </ul>

            <div className={`position ${burger ? "h" : ""}`}>
                <div className="logos">
                    <div className="logo_container">
                    <img src={logo} alt="(x_x)" className="logo_img" />
                    <p className="logo_title">HackBounty</p>
                    </div>
                    <div className="close" onClick={falseFunction}>⨉</div>
                </div>
                <ul className="ulls">
                    <button className="ull_li hide active">Home</button>
                    <button className="ull_li hide">Services</button>
                    <button className="ull_li hide">Work</button>
                    <button className="ull_li hide">Process</button>
                    <button className="ull_li hide">About</button>
                    <button className="ull_li hide">Careers</button>
                </ul>
            </div>

            <button className="contact_btn">Contact Us</button>
            <button className="toggle_btn" onClick={trueFunction}>
                <img className='btn_img' src={logoBurger} alt="(x_x)" />
            </button>
        </div>
    )
}

export default Header
