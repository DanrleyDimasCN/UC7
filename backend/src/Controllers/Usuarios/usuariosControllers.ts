import { Request, Response } from 'express';
import { UsuariosServices  } from '../../Services/Usuarios/UsuariosServices';

class UsuariosControllers {
    async cadastro_usuarios(req: Request, res: Response) {
        const {nome, email, password } = req.body
        const usuariosServices = new UsuariosServices()
        const resposta = await usuariosServices.cadastrar_usuarios({
            nome,
            email,
            password
        })   
        return res.json(resposta)
    }

}

export { UsuariosControllers }