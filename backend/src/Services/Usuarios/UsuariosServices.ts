import prismaClient from "../../prisma"
import { hash } from 'bcryptjs'
interface CadUsuarios {
    nome: string
    sobrenome: string
    cpf: string
    email: string
    senha: string
   
}
interface AlterarUsuarios {
    id: string
    nome: string
    email: string
}

class UsuariosServices {
    async cadastrar_usuarios({nome, sobrenome, cpf, email, senha}: CadUsuarios) {

        const senhaCriptografada = await hash(senha, 8)

        const cpfExiste = await prismaClient.usuario.findFirst({
            where: {
                cpf: cpf
            }
        })

        if (cpfExiste) {
            throw new Error("CPF já está cadastrado")
        }
         await prismaClient.usuario.create({
            data: {
                nome: nome,
                sobrenome: sobrenome,
                cpf: cpf,
                email: email,
                senha: senhaCriptografada
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

    async consultarUsuariosUnico(id: string) {
        const resposta = await prismaClient.usuario.findFirst({
            where: {
                id: id
            },
            select: {
                nome: true,
                email: true,
                senha: true
            }
        })
        return resposta
      
    }

    async alterarDadosUsuarios({id, nome, email}: AlterarUsuarios) {
        await prismaClient.usuario.update({
            where: {
                id: id
            },

            data: {
                nome: nome,
                email: email
            }
        })
    }

    async apagarUsuarios(id: string) {
        await prismaClient.usuario.delete({
            where: {
                id: id
            }
        })
        return ({dados: "Registro Apagado com Sucesso"})
    }

}

export { UsuariosServices }