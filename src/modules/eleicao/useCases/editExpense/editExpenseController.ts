import { Request, Response } from 'express';
import { EditEleicaoUseCase } from './editEleicaoUseCase';

export class EditEleicaoController {
  async handle(request: Request, response: Response) {
    const id = Number(request.params.id);
    const { descri, value, accountId, payRange, paymentDivision, type } =
      request.body;

    const editEleicaoUseCase = new EditEleicaoUseCase();

    const res = await editEleicaoUseCase.execute({
      id,
      descri,
      value,
      accountId,
      payRange,
      paymentDivision,
      type,
    });

    return response.json(res);
  }
}
