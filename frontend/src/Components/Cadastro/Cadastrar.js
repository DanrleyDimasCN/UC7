import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import apiLocal from "../../API/apiLocal"
import { toast } from "react-toastify"

export default function Cadastrar() {


    const mudarTela = useNavigate()
    const [nome, setNome ] = useState('')
    const [email, setEmail ] = useState('')
    const [cpf, setCpf ] = useState('')
    const [senha, setSenha ] = useState('')

    async function CadastroUsuarios(e) {
      try {
        e.preventDefault()

        if(!nome || !email || !cpf || !senha) {
            alert("Campo em Branco")
            return
        }

        await apiLocal.post('/CadastrarUsuarios', {
            nome,
            email,
            senha,
            cpf
        })
        toast.success('Cadastro Efetuado com Sucesso', {
            toastId: 'ToastId'
        })
        mudarTela('/')
        
      } catch (err) {
        toast.error('Erro ao se comunicar com o back-end', {
            toastId: 'ToastId'
        })
      }
    }

    return (
        <div>
            <form onSubmit={CadastroUsuarios}>
            <input
            type="text"
            placeholder='Digite o Seu Nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            />

            <input
            type="text"
            placeholder='Digite o E-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <input
            type="text"
            placeholder='Digite o CPF'
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            />

            <input
            type="password"
            placeholder='Digite a Senha'
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            />

            <button type="submit">Enviar</button>
            </form>
            <p>Clique <Link to='/'>Aqui</Link> para voltar para a página anterior</p>
        </div>
    )
}