import prismaClient from "../../prisma";

interface CadAdmin {
    pseudoNome: string
    senha: string
}

class AdminServices {
    async cadastrar_admin({pseudoNome, senha}: CadAdmin) {
        const resposta = await prismaClient.admin.create({
            data: {
                pseudoNome: pseudoNome,
                senha: senha
            }
        })
        return({dados: "Administrador Cadastrado no Sistema com Sucesso"})
    }


    async consultar_admin () {
        const resposta = await prismaClient.admin.findMany({
            select: {
                pseudoNome: true
            }
        })

        return resposta
    }
}

export { AdminServices }