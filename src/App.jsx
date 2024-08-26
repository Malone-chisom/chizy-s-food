import React, { useState } from 'react';
import Pages from './components/pages/Pages'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import LoginPopup from './components/loginPopup/LoginPopup';
import Home from './components/pages/home/Home';

function App() {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Pages />
        {/* <Home /> */}
      </div>
      <Footer />
    </>
  )
}

export default App