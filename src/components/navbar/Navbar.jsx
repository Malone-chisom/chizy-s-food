import React, { useState } from 'react';
import './navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
    const [menue, setMenue] = useState("home")

    return (
        <div className='navbar'>
            <img src={assets.logo} alt="logo" className="logo" />

            <ul className='navbar-menue'>
                <li onClick={() => setMenue("home")} className={menue == "home" ? "active" : ""}>home</li>
                <li onClick={() => setMenue("menue")} className={menue == "menue" ? "active" : ""}> menue</li>
                <li onClick={() => setMenue("mobile-app")} className={menue == "mobile-app" ? "active" : ""}> mobile-app </li>
                <li onClick={() => setMenue("contact-us")} className={menue == "contact-us" ? "active" : ""}> contact us</li>
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className='navbar-search-icon'>
                    <img src={assets.basket_icon} alt="" />
                    <div className='dot'></div>
                </div>
                <button>sign in</button>
            </div>
        </div>
    )
}

export default Navbar