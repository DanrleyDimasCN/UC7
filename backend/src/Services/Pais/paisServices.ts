import prismaClient from "../../prisma";

interface PaisConst {
    nome: string
}

class PaisServices {
    async cadastrar_pais ({nome}: PaisConst) {
        const resposta = await prismaClient.pais.create({
            data: {
                nome: nome
            }
        })
        return ({dados: "Pais Registrado com Sucesso"})
    }

    async consultar_pais () {
        const resposta = await prismaClient.pais.findMany({
            select: {
                nome: true
            }
        })
        return resposta
    }
}

export { PaisServices }