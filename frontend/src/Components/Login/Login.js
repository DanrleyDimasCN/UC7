import React, { useContext, useState } from "react";
import { AutenticadoContexto } from "../../Contexts/authContexts";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {

        const { loginEntrada } = useContext(AutenticadoContexto)
        
        const [email, setEmail] = useState('')
        const [senha, setSenha] = useState('')

        async function dadosLogin(e) {
            e.preventDefault()
            if(!email || !senha) {
                toast.warning('Prencha todos os campos')
                return
            }
            try {
                await loginEntrada(email, senha)
            } catch (err) {
                
            }
        }

        return (
        <div>
            <form onSubmit={dadosLogin}>
            <input
            type="text"
            placeholder='Digite o E-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input
            type="password"
            placeholder='Digite a Senha'
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            />

            <button>Enviar</button>
            <p>Não tem uma conta ? Clique <Link to='/cadastro'>Aqui</Link> para criar uma</p>
            </form>
        </div>
        )

}