interface CadUsuarios {
    nome: string
    email: string
    password: string
}

class UsuariosServices {
    async cadastrar_usuarios({nome, email, password}: CadUsuarios) {
        console.log(nome, email, password);  
    }

}

export { UsuariosServices }