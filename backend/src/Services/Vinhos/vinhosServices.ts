import prismaClient from "../../prisma";

interface RegVinhos {
    nome: string
    descricao: string
    preco_medio: number
}

class VinhosServices {
    async registrar_vinhos ({nome, descricao, preco_medio}: RegVinhos) {
        const resposta = await prismaClient.vinhos.create({
            data: {
                nome: nome,
                descricao: descricao,
                preco_medio: preco_medio
            }
        })
        return ({dados: 'Vinho Registrado com Sucesso'})
    }

    async consultarVinhos () {
        const resposta = await prismaClient.vinhos.findMany({
            select: {
                nome: true,
                descricao: true,
                preco_medio: true
            }
        })
        return resposta
    }
}

export { VinhosServices }
