import { Request, Response } from 'express';
import { EditVotoUseCase } from './editVotoUseCase';

export class EditVotoController {
  async handle(request: Request, response: Response) {
    const id = Number(request.params.id);
    const { numAccount, iban, balance, userId } = request.body;

    const editVotoUseCase = new EditVotoUseCase();

    const res = await editVotoUseCase.execute({
      id,
      numAccount,
      iban,
      balance,
      userId,
    });

    return response.json(res);
  }
}
