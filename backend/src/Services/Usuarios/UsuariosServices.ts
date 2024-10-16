import prismaClient from "../../prisma"

interface CadUsuarios {
    nome: string
    sobrenome: string
    email: string
    senha: string
    cpf: string
}

class UsuariosServices {
    async cadastrar_usuarios({nome, sobrenome, email, senha, cpf}: CadUsuarios) {
        const resposta = await prismaClient.usuario.create({
            data: {
                nome: nome,
                sobrenome: sobrenome,
                cpf: cpf,
                email: email,
                senha: senha
            }
        })
        return ({dados: 'Cadastro Efetuado Com Sucesso'})
    }

    async consultarUsuarios () {
        const resposta = await prismaClient.usuario.findMany({
            select: {
                nome:true,
                sobrenome: true,
                email: true,
                cpf: true
            }
        })

        return resposta
    }

}

export { UsuariosServices }