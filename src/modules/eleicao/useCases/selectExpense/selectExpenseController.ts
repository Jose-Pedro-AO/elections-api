import { Request, Response } from 'express';
import { SelectEleicaoUseCase } from './selectEleicaoUseCase';

export class SelectEleicaoController {
  async handle(request: Request, response: Response) {
    const id = Number(request.params.id);
    const selectEleicaoUseCase = new SelectEleicaoUseCase();

    const res = await selectEleicaoUseCase.execute({
      id,
    });

    return response.json(res);
  }
}
