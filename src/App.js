import React from 'react'
import { BrowserRouter ,Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'

import './Style.css'



import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Notfound from './pages/Notfound';




export default function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path='register' element={<Register/>} ></Route>
                </Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='*' element={<Notfound/>}></Route>
                
            </Routes>
        </BrowserRouter>
    </>
  )
}
