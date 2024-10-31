import prismaClient  from "../../prisma";

interface ListaVinhos {
    vinhos_adicionado: string
    idUsuario: number
    
}

class ListaServices {
    async cadastro_vinhos({vinhos_adicionado, idUsuario}: ListaVinhos) {
        const resposta = await prismaClient.lista.create({
            data: {
                vinhos_adicionado: vinhos_adicionado,
                idUsuario: idUsuario

            }
        })
        return ({dados: 'Vinho Adicinado com sucesso'})
    }

    async consultarVinhos () {
        const resposta = await prismaClient.lista.findMany({
            select: {
                vinhos_adicionado: true
            }
        })

        return resposta
    }
}




export { ListaServices }