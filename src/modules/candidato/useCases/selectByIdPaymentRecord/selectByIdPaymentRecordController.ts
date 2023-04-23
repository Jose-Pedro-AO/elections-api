import { Request, Response } from 'express';
import { SelectByIdCandidatoUseCase } from './selectByIdCandidatoUseCase';

export class SelectByIdCandidatoController {
  async handle(request: Request, response: Response) {
    const id = Number(request.params.id);

    const selectByIdCandidatoUseCase = new SelectByIdCandidatoUseCase();

    const res = await selectByIdCandidatoUseCase.execute({
      id,
    });

    return response.json(res);
  }
}
