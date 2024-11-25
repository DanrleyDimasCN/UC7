import prismaClient from "../../prisma";

interface RegVinhos {
    nome: string
    tipo: string
    uva: string
    descricao: string
    IdLista: number
    IdRegiao: number
    IdAvaliacao: number
}

class VinhosServices {
    async registrar_vinhos ({nome, tipo, uva ,descricao, IdLista, IdRegiao, IdAvaliacao}: RegVinhos) {
        const resposta = await prismaClient.vinhos.create({
            data: {
                nome: nome,
                tipo: tipo,
                uva: uva,
                descricao: descricao,
                IdLista: IdLista,
                IdRegiao: IdRegiao,
                IdAvaliacao: IdAvaliacao
            }
        })
        return ({dados: 'Vinho Registrado com Sucesso'})
    }

    async consultarVinhos () {
        const resposta = await prismaClient.vinhos.findMany({
            select: {
                nome: true,
                tipo: true,
                uva: true,
                descricao: true
            }
        })
        return resposta
    }
}

export { VinhosServices }
