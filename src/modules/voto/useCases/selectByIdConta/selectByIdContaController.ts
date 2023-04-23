import { Request, Response } from 'express';
import { SelectByIdVotoUseCase } from './selectByIdVotoUseCase';

export class SelectByIdVotoController {
  async handle(request: Request, response: Response) {
    const id = Number(request.params.id);

    const selectByIdVotoUseCase = new SelectByIdVotoUseCase();

    const res = await selectByIdVotoUseCase.execute({
      id,
    });

    return response.json(res);
  }
}
