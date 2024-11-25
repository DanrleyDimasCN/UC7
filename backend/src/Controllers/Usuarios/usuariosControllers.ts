import { Request, Response } from 'express';
import { UsuariosServices  } from '../../Services/Usuarios/UsuariosServices';

class UsuariosControllers {
    async cadastro_usuarios(req: Request, res: Response) {
        const {nome, sobrenome, cpf, email, senha } = req.body
        const usuariosServices = new UsuariosServices()
        const resposta = await usuariosServices.cadastrar_usuarios({
            nome,
            sobrenome,
            cpf,
            email,
            senha
            
        })   
        return res.json(resposta)
    }

    async consultarUsuarios(req: Request, res: Response) {
        const usuariosServices = new UsuariosServices()
        const resposta = await usuariosServices.consultarUsuarios()

        return res.json(resposta)
    }

    
}

export { UsuariosControllers }