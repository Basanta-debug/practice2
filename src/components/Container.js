import React from 'react'
import Home from './Home'
import About from './About'
import { Route, Routes } from 'react-router-dom'
import Contactus from './Contactus'

export default function Container() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contactus />}></Route>
            </Routes>
        </div>
    )
}
