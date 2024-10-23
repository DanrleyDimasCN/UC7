import prismaClient  from "../../prisma";

interface ListaVinhos {
    vinhos_adicionado: string
    usuarioId: number
    
}

class ListaServices {
    async cadastro_vinhos({vinhos_adicionado, usuarioId}: ListaVinhos) {
        const resposta = await prismaClient.lista.create({
            data: {
                vinhos_adicionado: vinhos_adicionado,
                usuarioId: usuarioId

            }
        })
        return ({dados: 'Vinho Adicinado com sucesso'})
    }

    async consultarVinhos () {
        const resposta = await prismaClient.lista.findMany({
            select: {
                vinhos_adicionado: true,
                usuarioId: true
            }
        })

        return resposta
    }
}




export { ListaServices }