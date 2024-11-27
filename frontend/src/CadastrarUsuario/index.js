import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import apiLocal from '../API/apiLocal'

export default function CadastrarUsuario() {

    const mudarTela = useNavigate()
    const [nome, setNome ] = useState('')
    const [email, setEmail ] = useState('')
    const [senha, setSenha ] = useState('')

    async function CadastroUsuarios(e) {
        try {
            e.preventDefault()

            if(!nome || !email || !senha) {
                alert("Campo em Branco")
                return
            }

            await apiLocal.post('/CadastrarUsuario', {
                nome,
                email,
                senha
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
        <div className='conteinerCadastroUsuariosGeral'>
            <h1>Formulario de Cadastro de Usuários</h1>
            <form onSubmit={CadastroUsuarios}>
                <input
                    type="text"
                    placeholder='Digite Seu Nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Digite Seu E-Mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Digite Sua Senha'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button type='submit'>Enviar</button>
            </form>
            <Link to='/' className='buttonVoltar'>Voltar Inicio</Link>
        </div>
    )
}