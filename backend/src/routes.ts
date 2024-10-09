import { Router } from 'express';

import { UsuariosControllers } from './Controllers/Usuarios/usuariosControllers'

const router = Router();

router.post('/CadastroUsuarios', new UsuariosControllers().cadastro_usuarios)

export default router;