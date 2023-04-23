import { Request, Response } from 'express';
import { DeleteEleicaoUseCase } from './deleteEleicaoUseCase';

export class DeleteEleicaoController {
  async handle(request: Request, response: Response) {
    const id = Number(request.params.id);

    const deleteEleicaoUseCase = new DeleteEleicaoUseCase();

    const res = await deleteEleicaoUseCase.execute({
      id,
    });

    return response.json(res);
  }
}
