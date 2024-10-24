import { Router } from 'express';

import { UsuariosControllers } from './Controllers/Usuarios/usuariosControllers'
import { ListaControllers } from './Controllers/Lista/listaControlles';
import { VinhosControllers } from './Controllers/Vinhos/vinhosControllers';

const router = Router();

// Rota - Cadastrar Usuarios
router.post('/Usuario', new UsuariosControllers().cadastro_usuarios)
router.get('/ConsultarUsuarios', new UsuariosControllers().consultarUsuarios)


// Rota - Adicionar e consultar Vinhos
router.post('/Lista', new ListaControllers().lista_vinhos)
router.get('/ConsultarLista', new ListaControllers().consultarVinhos)

// // Rota - Registrar Vinhos
router.post('/Vinhos', new VinhosControllers().registrar_vinhos)
router.get('/registrar', new VinhosControllers().consultarVinhos)

Rota = Avaliação
router.post('/Avaliacao' new AvaliacaoControllers().avaliar_vinhos)
router.get('/Avaliacao' new AvaliacaoControllers().avaliar_vinhos)

export default router;