import React from 'react';
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App(){
    return(
       <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
       </BrowserRouter>
    )
}