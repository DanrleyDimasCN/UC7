import { Router } from 'express';

import { UsuariosControllers } from './Controllers/Usuarios/usuariosControllers'
import { ListaControllers } from './Controllers/Lista/listaControlles';
import { VinhosControllers } from './Controllers/Vinhos/vinhosControllers';
import { AvaliacaoControllers } from './Controllers/Avaliacao/avaliacaoControllers';
import { AdminControllers } from './Controllers/Administrador/AdminControllers';

const router = Router();

// Rota - Cadastrar Usuarios
router.post('/Usuario', new UsuariosControllers().cadastro_usuarios)
router.get('/ConsultarUsuarios', new UsuariosControllers().consultarUsuarios)


// Rota - Adicionar e consultar Vinhos
router.post('/Lista', new ListaControllers().lista_vinhos)
router.get('/ConsultarLista', new ListaControllers().consultarVinhos)

// // Rota - Registrar Vinhos
router.post('/CadastrarVinhos', new VinhosControllers().registrar_vinhos)
router.get('/ConsultarVinhos', new VinhosControllers().consultarVinhos)

// Rota = Avaliação
router.post('/Avaliacao', new AvaliacaoControllers().avaliar_vinhos)
router.get('/ConsultarAvaliacao', new AvaliacaoControllers().consultar_avaliacao)

// Rota - Admnistrador
router.post('/CadastrarAdmin', new AdminControllers().cadastro_admin)
router.get('/ConsultarAdmin', new AdminControllers().consultarAdmin)

export default router;