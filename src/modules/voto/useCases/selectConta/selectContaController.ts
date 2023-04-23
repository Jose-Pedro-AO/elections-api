import { Request, Response } from 'express';
import { SelectVotoUseCase } from './selectVotoUseCase';

export class SelectVotoController {
  async handle(request: Request, response: Response) {
    const selectVotoUseCase = new SelectVotoUseCase();

    const res = await selectVotoUseCase.execute();

    return response.json(res);
  }
}
