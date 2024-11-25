import prismaClient from "../../prisma"

interface CadUsuarios {
    nome: string
    sobrenome: string
    cpf: string
    email: string
    senha: string
   
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

}

export { UsuariosServices }