import { Request, Response } from 'express';
import { SelectUserUseCase } from './SelectUserUseCase';

export class SelectByIdCandidatoController {
  async handle(request: Request, response: Response) {
    const selectUserUseCase = new SelectUserUseCase();

    const res = await selectUserUseCase.execute();

    return response.json(res);
  }
}
