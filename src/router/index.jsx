import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import Contact from '../components/Contact/Contact';
import Skills from '../components/Skills/Skills';

const Router = () => {
  return (
    <div>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/skills' element={<Skills/>}/>
            </Routes>
    </div>
  )
}

export default Router