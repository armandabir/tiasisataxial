import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Categories from './Pages/categories';
import About from './Pages/About';
import Product from './Pages/Product';

export default function App(){
    return(
       <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cats' element={<Categories/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/product' element={<Product/>}/>
            </Routes>
       </BrowserRouter>
    )
}