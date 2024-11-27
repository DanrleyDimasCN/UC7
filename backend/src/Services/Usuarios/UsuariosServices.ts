import prismaClient from "../../prisma"

interface CadUsuarios {
    nome: string
    sobrenome: string
    cpf: string
    email: string
    senha: string
   
}
interface AlterarUsuarios {
    id: number
    nome: string
    email: string
}

class UsuariosServices {
    async cadastrar_usuarios({nome, sobrenome, cpf, email, senha}: CadUsuarios) {

        const cpfExiste = await prismaClient.usuario.findFirst({
            where: {
                cpf: cpf
            }
        })

        if (cpfExiste) {
            throw new Error("CPF já está cadastrado")
        }
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
                cpf: true,
                email: true
            }
        })

        return resposta
    }

    async alterarDadosUsuarios({id, nome, email}: AlterarUsuarios) {
        const resposta = await prismaClient.usuario.update({
            where: {
                id: id
            },

            data: {
                nome: nome,
                email: email
            }
        })
    }

    async apagarUsuarios(id: number) {
        await prismaClient.usuario.delete({
            where: {
                id: id
            }
        })
        return ({dados: "Registro Apagado com Sucesso"})
    }

}

export { UsuariosServices }