import { Request, Response } from 'express';
import { SelectAllEleicaoUseCase } from './selectAllEleicaoUseCase';

export class SelectAllEleicaoController {
  async handle(request: Request, response: Response) {
    const selectAllEleicaoUseCase = new SelectAllEleicaoUseCase();

    const res = await selectAllEleicaoUseCase.execute();

    return response.json(res);
  }
}
