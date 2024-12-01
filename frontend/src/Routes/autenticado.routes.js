import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function Autenticado() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"/>
            </Routes>
        </BrowserRouter>
    )
}