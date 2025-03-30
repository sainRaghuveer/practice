import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Products from "../pages/Products"
import FourOFourPage from '../pages/FourOFourPage';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='*' element={<FourOFourPage/>}></Route>

        </Routes>
    </div>
  )
}

export default AllRoutes