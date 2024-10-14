import prismaClient from "../../prisma"

interface CadUsuarios {
    nome: string
    email: string
    password: string
}

class UsuariosServices {
    async cadastrar_usuarios({nome, email, password}: CadUsuarios) {
        const resposta = await prismaClient.cadastroUsuarios.create({
            data: {
                nome: nome,
                email: email,
                senha: password
            }
        })
        return ({dados: 'Cadastro Efetuado Com Sucesso'})
    }

}

export { UsuariosServices }