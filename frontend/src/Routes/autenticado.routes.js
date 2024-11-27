import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyPage from '../MyPage'
import EditarUsuario from '../EditarUsuario'



export default function Autenticado() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/EditarUsuario/:id' element={<EditarUsuario/>} />
                <Route path='/' element={<MyPage/>} />

                <Route path='*' element={<MyPage/>} />
            </Routes>
        </BrowserRouter>
    )
}