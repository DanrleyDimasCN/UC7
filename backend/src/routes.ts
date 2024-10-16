import { Router } from 'express';

import { UsuariosControllers } from './Controllers/Usuarios/usuariosControllers'

const router = Router();

router.post('/Usuario', new UsuariosControllers().cadastro_usuarios)
router.get('/ConsultarUsuarios', new UsuariosControllers().consultarUsuarios)

export default router;