import { Request, Response } from 'express';
import { SelectCandidatoUseCase } from './selectCandidatoUseCase';

export class SelectCandidatoController {
  async handle(request: Request, response: Response) {
    const selectCandidatoUseCase = new SelectCandidatoUseCase();

    const res = await selectCandidatoUseCase.execute();

    return response.json(res);
  }
}
