import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from '../Inicio'
import CadastrarUsuario from '../CadastrarUsuario'

export default function NAutenticado() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio/>} />
                <Route path='/CadastrarUsuario' element={<CadastrarUsuario/>} />

                <Route path='*' element={<Inicio />} />
            </Routes>
        </BrowserRouter>
    )
}