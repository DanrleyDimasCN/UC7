import prismaClient  from "../../prisma";

interface ListaVinhos {
    vinhos_adicionado: string
    
}

class ListaServices {
    async cadastro_vinhos({vinhos_adicionado}: ListaVinhos) {
        const resposta = await prismaClient.lista.create({
            data: {
                vinhos_adicionado: vinhos_adicionado,

            }
        })
        return ({dados: 'Vinho Adicinado com sucesso'})
    }

    async consultarVinhos () {
        const resposta = await prismaClient.lista.findMany({
            select: {
                vinhos_adicionado: true,
            }
        })

        return resposta
    }
}




export { ListaServices }