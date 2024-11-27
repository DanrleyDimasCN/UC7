import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiLocal from "../API/apiLocal";

export default function EditarUsuarios() {


    const mudarTela = useNavigate()
    const { id } = useParams()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    useEffect(() => {
        async function consultarDados() {
            const resposta = await apiLocal.post('/ConsultarUsuariosUnico', {
                id
            })
            setNome(resposta.data.nome)
            setEmail(resposta.data.email)
            setSenha(resposta.data.senha)
        }
        consultarDados()
    }, [])
    


    async function enviarAlteracao(e) {
       try {
        e.preventDefault()
        console.log(id);
        const resposta = await apiLocal.put('/AlterarDadosUsuarios', {
            id,
            nome,
            email
        })
        
       
    } catch (err) {

        alert('Erro ao Comunicar com o Servidor')

       }
    }

     return (
        <div>
            <h1>Editar Usuarios</h1>
            <form onSubmit={enviarAlteracao}>
                <input 
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)} />

                <input 
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

                <input 
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)} />

                <button type="submit">Enviar</button>
            </form>
        </div>
     )
}