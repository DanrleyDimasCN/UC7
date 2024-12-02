import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiLocal from "../../API/apiLocal";
import { toast } from "react-toastify";

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
    }, [id])

    async function enviarAlteracao(e) {
        try {
            e.preventDefault()
            console.log(id);
            // eslint-disable-next-line no-unused-vars
            const resposta = await apiLocal.put('/AlterarDadosUsuarios', {
                id,
                nome,
                email
            })
            toast.success('Cadastro Efetuado com Sucesso')
            mudarTela('/')
        } catch (err) {
            toast.error('Erro ao se Comunicar com o Back-End')
        }
    }


    return (
        <div>
            <form onSubmit={enviarAlteracao}>
            <input 
            type="text"
            placeholder="Digite o Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            />

            <input 
            type="text"
            placeholder="Digite o novo E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <input 
            type="password"
            placeholder="Digite a nova senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            />

            <button type="submit">Enviar</button>
            </form>
        </div>
    )
}