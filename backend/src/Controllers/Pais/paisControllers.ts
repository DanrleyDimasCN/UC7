import { Request, Response } from "express";
import { PaisServices } from "../../Services/Pais/paisServices";


class PaisControllers {
    async cadastrar_pais(req: Request, res: Response) {
        const { nome } = req.body
        const paisServices = new PaisServices()
        const resposta = await paisServices.cadastrar_pais({
            nome
        })
        return res.json(resposta)
    }

    async consultar_pais(req: Request, res: Response) {
        const paisServices = new PaisServices()
        const resposta = await paisServices.consultar_pais()

        return res.json(resposta)
    }
}

export { PaisControllers }