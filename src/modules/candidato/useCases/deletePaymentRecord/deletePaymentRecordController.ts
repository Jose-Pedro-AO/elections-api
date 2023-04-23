import { Request, Response } from 'express';
import { DeleteCandidatoUseCase } from './deleteCandidatoUseCase';

export class DeleteCandidatoController {
  async handle(request: Request, response: Response) {
    const id = Number(request.params.id);

    const deleteCandidatoUseCase = new DeleteCandidatoUseCase();

    const res = await deleteCandidatoUseCase.execute({
      id,
    });

    return response.json(res);
  }
}
