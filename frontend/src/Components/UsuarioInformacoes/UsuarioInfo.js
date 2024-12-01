import React from "react"
import './estilo.usuarioinfo.scss'

export default function UsuariosInfo() {
    return (
        <div className="conteinerDashboardGeral">
            <table className="usuariosTabela">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Editar</th>
                        <th>Apagar</th>
                    </tr>
                    <tr>
                        <td>Item</td>
                        <td>Item</td>
                        <td>Item</td>
                        <td>Item</td>
                        <td>Item</td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}