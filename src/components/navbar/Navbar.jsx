import React, { useState } from 'react';
import './navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
    const [menue, setMenue] = useState("home")

    return (
        <div className='navbar'>
            <img src={assets.logo} alt="logo" className="logo" />

            <ul className='navbar-menue'>
                <Link to="/" onClick={() => setMenue("home")} className={menue == "home" ? "active" : ""}>home</Link>
                <a href='#app-download' onClick={() => setMenue("mobile-app")} className={menue == "mobile-app" ? "active" : ""}> mobile-app </a>
                <a href='#explore-menu' onClick={() => setMenue("menue")} className={menue == "menue" ? "active" : ""}> menue</a>
                <a href='#footer' onClick={() => setMenue("contact-us")} className={menue == "contact-us" ? "active" : ""}> contact us</a>
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className='navbar-search-icon'>
                    <img src={assets.basket_icon} alt="" />
                    <div className='dot'></div>
                </div>
                <button onClick={() => setShowLogin(true)}>sign in</button>
            </div>
        </div>
    )
}

export default Navbar