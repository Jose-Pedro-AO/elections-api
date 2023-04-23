import { Request, Response } from 'express';
import { CreateVotoUseCase } from './createVotoUseCase';

export class CreateVotoController {
  async handle(request: Request, response: Response) {
    const { usuarioId, candidatoId } = request.body;

    const createVotoUseCase = new CreateVotoUseCase();

    const res = await createVotoUseCase.execute({
      usuarioId,
      candidatoId,
    });

    return response.json(res);
  }
}
