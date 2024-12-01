import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
        return (
        <div>
            <form>
            <input
            type="text"
            placeholder='Digite o E-mail'
            />
            <input
            type="password"
            placeholder='Digite a Senha'
            />

            <button>Enviar</button>
            <p>Não tem uma conta ? Clique <Link to='/cadastro'>Aqui</Link> para criar uma</p>
            </form>
        </div>
        )

}