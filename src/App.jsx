import React from 'react';
import Pages from './components/pages/Pages'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Pages />
      </div>
      <Footer />
    </>
  )
}

export default App