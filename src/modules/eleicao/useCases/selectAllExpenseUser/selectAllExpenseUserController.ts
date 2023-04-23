import { Request, Response } from 'express';
import { SelectAllEleicaoUserUseCase } from './selectAllEleicaoUserUseCase';

export class SelectAllEleicaoUserController {
  async handle(request: Request, response: Response) {
    const selectAllEleicaoUserUseCase = new SelectAllEleicaoUserUseCase();
    const userId = Number(request.params.id);

    const res = await selectAllEleicaoUserUseCase.execute({ userId });

    return response.json(res);
  }
}
