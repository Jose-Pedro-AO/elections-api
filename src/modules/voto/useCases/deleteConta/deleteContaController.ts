import { Request, Response } from 'express';
import { DeleteVotoUseCase } from './deleteVotoUseCase';

export class DeleteVotoController {
  async handle(request: Request, response: Response) {
    const id = Number(request.params.id);

    const deleteVotoUseCase = new DeleteVotoUseCase();

    const res = await deleteVotoUseCase.execute({
      id,
    });

    return response.json(res);
  }
}
