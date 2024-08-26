import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Cart from './cart/Cart';
import PlaceOder from './placeOrder/PlaceOder';
import Check from './cart/Check';

const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/Order' element={<PlaceOder />} />
                <Route path='/check' element={<Check />} />
            </Routes>
        </div>
    )
}

export default Pages;