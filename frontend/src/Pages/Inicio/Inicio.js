import React from 'react'
import { Link } from 'react-router-dom'

export default function Inicio() {
    return (
      <div>
        <h1>Seja Bem-Vindo</h1>
        <p>Vamos juntos nos aprofundar no mundo dos vinhos.</p>

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