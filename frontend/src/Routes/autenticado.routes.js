import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Perfil from "../Pages/Perfil/Perfil"
import Editar from "../Pages/Editar/Editar"

export default function Autenticado() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/perfil" element={<Perfil/>}/>
                <Route path="/EditarUsuarios/:id" element={<Editar/>} /> 

                <Route path="*" element={<Perfil/>}/>
            </Routes>
        </BrowserRouter>
    )
}