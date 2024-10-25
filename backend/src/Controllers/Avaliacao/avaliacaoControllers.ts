import { Request, Response } from "express";
import { AvaliacaoServices } from "../../Services/Avaliacao/avaliacaoServices"

class AvaliacaoControllers {
    async avaliar_vinhos(req: Request, res: Response) {
        const { nota, favoritos, comentarios } = req.body
        const avaliacaoServices = new AvaliacaoServices()
        const resposta = await avaliacaoServices.avaliar_vinhos({
            nota,
            favoritos,
            comentarios
        })
        return res.json(resposta)
    }

    async consultar_avaliacao(req: Request, res: Response) {
        const avaliacaoServices = new AvaliacaoServices()
        const resposta = await avaliacaoServices.consultar_avaliacao()

        return res.json(resposta)
    }
}

export { AvaliacaoControllers }