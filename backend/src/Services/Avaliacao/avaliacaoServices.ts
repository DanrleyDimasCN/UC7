import prismaClient from "../../prisma";

interface AvaVinhos {
    nota: number
    favoritos: boolean
    comentarios: string
}

class AvaliacaoServices {
    async avaliar_vinhos ({nota, favoritos, comentarios}: AvaVinhos) {
        const resposta = await prismaClient.avaliacao.create({
            data: {
                nota: nota,
                favoritos: favoritos,
                comentarios: comentarios
            }
        })
        return ({dados: 'Avaliação Bem-sucedida'})
    }

    async consultarVinhos () {
        const resposta = await prismaClient.avaliacao.findMany({
            select: {
                nota: true,
                favoritos: true,
                comentarios: true

            }
        })
    }
}