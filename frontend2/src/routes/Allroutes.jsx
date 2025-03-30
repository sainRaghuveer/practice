import React from 'react';
import {Routes, Route} from "react-router-dom"
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Products from '../pages/Products';
import FourOFour from '../pages/FourOFour';

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='*' element={<FourOFour/>}></Route>

        </Routes>
    </div>
  )
}

export default Allroutes