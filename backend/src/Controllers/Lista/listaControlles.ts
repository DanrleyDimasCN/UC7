import { Request, Response } from "express";
import { ListaServices } from "../../Services/Lista/ListaServices";


class ListaControllers {
    async lista_vinhos(req: Request, res: Response) {
        const { vinhos_adicionado } = req.body
        const listaServices = new ListaServices()
        const resposta = await listaServices.cadastro_vinhos({
            vinhos_adicionado,
            
        })
        return res.json(resposta)
    }

    async consultarVinhos(req: Request, res: Response) {
        const listaServices = new ListaServices()
        const resposta = await listaServices.consultarVinhos()
        
        return res.json(resposta)
    }
}

export { ListaControllers }