import React, {useState, useEffect } from "react"
import apiLocal from "../../API/apiLocal"
import { toast } from "react-toastify"
import { Link } from 'react-router-dom'
import './estilo.usuarioinfo.scss'

export default function UsuariosInfo() {

    const [ dadosUsuarios, setDadosUsuarios ] = useState([''])

    const iToken = localStorage.getItem('@token')
    const token = JSON.parse(iToken)

    useEffect(() => {
        async function consultarDadosUsuarios() {
            const resposta = await apiLocal.get('/ConsultarUsuarios', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setDadosUsuarios(resposta.data)
        }
        consultarDadosUsuarios()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dadosUsuarios])

    async function apagarUsuarios(id) {
        try {
            await apiLocal.delete(`/ApagarUsuarios/${id}`)
            toast.success("Registro Apagado com Sucesso", {
                toastId: 'ToastId'
            })
        } catch (err) {
            toast.error('Erro ao se comunicar com Back-End')
        }
    }

    return (
        <div className="conteinerDashboardGeral">
            <table className="usuariosTabela">
                <thead>
                    <tr key="">
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>CPF</th>
                        <th>Editar</th>
                        <th>Apagar</th>
                    </tr>
                    {dadosUsuarios.map((item) => {
                        return (
                            <>
                                <tr key="">
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.email}</td>
                                    {!item.registrar ?
                                    <td>Vazio</td> : 
                                    <td>{item.registrar.nome}</td>}
                                    <td><Link to={`/EditarUsuarios/${item.id}`}>Editar</Link></td>
                                    <td><button type="submit" onClick={() => apagarUsuarios(item.id)}>Apagar</button></td>
                                </tr>
                            </>
                        )
                    })}
                </thead>
            </table>
        </div>
    )
}