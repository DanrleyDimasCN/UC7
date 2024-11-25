import { Router } from 'express';

import { UsuariosControllers } from './Controllers/Usuarios/usuariosControllers'
import { ListaControllers } from './Controllers/Lista/listaControlles';
import { VinhosControllers } from './Controllers/Vinhos/vinhosControllers';
import { AvaliacaoControllers } from './Controllers/Avaliacao/avaliacaoControllers';
import { AdminControllers } from './Controllers/Administrador/AdminControllers';
import { PaisControllers } from './Controllers/Pais/paisControllers';
import { RegiaoControllers } from './Controllers/Regiao/regiaoControllers';

const router = Router();

// Rota - Admnistrador
router.post('/CadastrarAdmin', new AdminControllers().cadastrar_admin)
router.get('/ConsultarAdmin', new AdminControllers().consultarAdmin)

// Rota - Cadastrar Usuarios
router.post('/CadastrarUsuario', new UsuariosControllers().cadastro_usuarios)
router.get('/ConsultarUsuarios', new UsuariosControllers().consultarUsuarios)

// Rota - Adicionar e consultar Vinhos
router.post('/CadastrarLista', new ListaControllers().lista_vinhos)
router.get('/ConsultarLista', new ListaControllers().consultarVinhos)

// Rota - Adicionar pais e consultar pais
router.post('CadastrarPais', new PaisControllers().cadastrar_pais)
router.get('ConsultarPais', new PaisControllers().consultar_pais)

// Regiao - adicionar Regiao e consultar regiao
router.post('CadastrarRegiao', new RegiaoControllers().reg_regiao)
router.get('ConsutarRegiao', new RegiaoControllers().consultar_regiao)

// // Rota - Registrar Vinhos
router.post('/CadastrarVinhos', new VinhosControllers().registrar_vinhos)
router.get('/ConsultarVinhos', new VinhosControllers().consultarVinhos)

// Rota = Avaliação
router.post('/CadastrarAvaliacao', new AvaliacaoControllers().avaliar_vinhos)
router.get('/ConsultarAvaliacao', new AvaliacaoControllers().consultar_avaliacao)

export default router;