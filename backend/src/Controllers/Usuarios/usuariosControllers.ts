import { Request, Response } from 'express';

class UsuariosControllers {
    async cadastro_usuarios(req: Request, res: Response) {
        const {nome, email, password } = req.body
        console.log(nome, email, password);
        
    }

}

export { UsuariosControllers }