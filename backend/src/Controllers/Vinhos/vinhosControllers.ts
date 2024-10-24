import { Request, Response } from "express";
import { VinhosServices } from "../../Services/Vinhos/vinhosServices";

class VinhosControllers {
    async registrar_vinhos(req: Request, res: Response) {
    const {nome, descricao, preco_medio } = req.body
    const vinhosServices = new VinhosServices()
    const resposta = await vinhosServices.registrar_vinhos({
        nome,
        descricao,
        preco_medio
    })
    return res.json(resposta) 
}

async consultarVinhos(req: Request, res: Response) {
    const vinhosServices = new VinhosServices()
    const resposta = await vinhosServices.consultarVinhos()

    return res.json(resposta)
}
}

export { VinhosControllers }
