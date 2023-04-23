import { Router } from 'express';
import { AuthenticateUserController } from './modules/account/authenticateUser/AuthenticateUserController';
import { CreateUserController } from './modules/user/useCases/createUser/createUserController';
import { CreateEleicaoController } from './modules/eleicao/useCases/createEleicao/createEleicaoController';
import { EditEleicaoController } from './modules/eleicao/useCases/editEleicao/editEleicaoController';
import { DeleteEleicaoController } from './modules/eleicao/useCases/deleteEleicao/deleteEleicaoController';
import { SelectEleicaoController } from './modules/eleicao/useCases/selectEleicao/selectEleicaoController';
import { SelectAllEleicaoController } from './modules/eleicao/useCases/selectAllEleicao/selectAllEleicaoController';
import { SelectAllEleicaoUserController } from './modules/eleicao/useCases/selectAllEleicaoUser/selectAllEleicaoUserController';

import { CreateVotoController } from './modules/voto/useCases/createVoto/createVotoController';
import { EditVotoController } from './modules/voto/useCases/editVoto/editVotoController';
import { DeleteVotoController } from './modules/voto/useCases/deleteVoto/deleteVotoController';
import { SelectVotoController } from './modules/voto/useCases/selectVoto/selectVotoController';

import { CreateCandidatoController } from './modules/candidato/useCases/createCandidato/createCandidatoController';
import { EditCandidatoController } from './modules/candidato/useCases/editCandidato/editCandidatoController';
import { DeleteCandidatoController } from './modules/candidato/useCases/deleteCandidato/deleteCandidatoController';
import { SelectCandidatoController } from './modules/candidato/useCases/selectCandidato/selectCandidatoController';
// import authMiddleware from './middlewares/authMiddleware';

import { SelectByIdVotoController } from './modules/voto/useCases/selectByIdVoto/selectByIdVotoController';
import { SelectByIdCandidatoController } from './modules/candidato/useCases/selectByIdCandidato/selectByIdCandidatoController';

const routes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

const createEleicao = new CreateEleicaoController();
const editEleicao = new EditEleicaoController();
const deleteEleicao = new DeleteEleicaoController();
const selectAllEleicao = new SelectAllEleicaoController();
const selectEleicao = new SelectEleicaoController();

const selectAllEleicaoUser = new SelectAllEleicaoUserController();

const createVoto = new CreateVotoController();
const editVoto = new EditVotoController();
const deleteVoto = new DeleteVotoController();
const selectAllVoto = new SelectVotoController();
const selectByIdVoto = new SelectByIdVotoController();

const createCandidato = new CreateCandidatoController();
const editCandidato = new EditCandidatoController();
const deleteCandidato = new DeleteCandidatoController();
const selectAllCandidato = new SelectCandidatoController();
const selectByIdCandidato = new SelectByIdCandidatoController();

routes.post('/user/authenticate', authenticateUserController.handle);
routes.post('/user/', createUserController.handle);
// routes.use(authMiddleware);

// User
routes.post('/user/edit/:id', createUserController.handle);

// Eleicao
routes.post('/eleicao/create', createEleicao.handle);
routes.post('/eleicao/edit/:id', editEleicao.handle);
routes.delete('/eleicao/delete/:id', deleteEleicao.handle);
routes.get('/eleicao', selectAllEleicao.handle);
routes.get('/eleicaos', selectAllEleicaoUser.handle);
routes.get('/eleicao/:id', selectEleicao.handle);

// Account
routes.post('/voto/create', createVoto.handle);
routes.post('/voto/edit/:id', editVoto.handle);
routes.delete('/voto/delete/:id', deleteVoto.handle);
routes.get('/voto', selectAllVoto.handle);
routes.get('/voto/:id', selectByIdVoto.handle);

// Candidato
routes.post('/candidato/create', createCandidato.handle);
routes.post('/candidato/edit/:id', editCandidato.handle);
routes.delete('/candidato/delete/:id', deleteCandidato.handle);
routes.get('/candidato', selectAllCandidato.handle);
routes.get('/projectSpec/:id', selectByIdCandidato.handle);

export { routes };
