import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Perfil from "../Pages/Perfil/Perfil"

export default function Autenticado() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/editar" />element={}/> */}
                <Route path="/perfil" element={<Perfil/>}/>

                <Route path="*" element={<Perfil/>}/>
            </Routes>
        </BrowserRouter>
    )
}