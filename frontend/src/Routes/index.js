import React from "react";
import NAutenticado from "./nAutenticado.routes";
import Autenticado from "./autenticado.routes";

export default function Rotas() {
    const autenticado = false
    return (
        autenticado === true ? <Autenticado /> : <NAutenticado />
    )
}