import { Request, Response } from 'express';
import { EditCandidatoUseCase } from './editCandidatoUseCase';

export class EditCandidatoController {
  async handle(request: Request, response: Response) {
    const id = Number(request.params.id);
    const { value, eleicaoId, userId } = request.body;

    const editCandidatoUseCase = new EditCandidatoUseCase();

    const res = await editCandidatoUseCase.execute({
      id,
      value,
      eleicaoId,
      userId,
    });

    return response.json(res);
  }
}
