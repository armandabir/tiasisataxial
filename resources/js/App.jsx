import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Categories from './Pages/categories';
import About from './Pages/About';
import Product from './Pages/Product';
import Services from './Pages/Services';
import CardPage from './Pages/CartPage';
import Projects from './Pages/projects';

const root = document.getElementById('app')
const data= JSON.parse(root.getAttribute('data-page'));
export default function App(){
    return(
       <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cats' element={<Categories/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/product' element={<Product data={data}/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/projects' element={<Projects data={data}/>}/>
                <Route path='/cart' element={<CardPage/>}/>
            </Routes>
       </BrowserRouter>
    )
}