import { Request, Response } from 'express';
import { CreateCandidatoUseCase } from './createCandidatoUseCase';

export class CreateCandidatoController {
  async handle(request: Request, response: Response) {
    const { eleicaoId, usuarioId, partido, imagem } = request.body;

    const createCandidatoUseCase = new CreateCandidatoUseCase();

    const res = await createCandidatoUseCase.execute({
      eleicaoId,
      usuarioId,
      partido,
      imagem,
    });

    return response.json(res);
  }
}
