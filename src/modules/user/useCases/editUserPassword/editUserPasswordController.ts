import { Request, Response } from 'express';
import { EditUserPasswordUseCase } from './editUserPasswordUseCase';

export class EditUserPasswordController {
  async handle(request: Request, response: Response) {
    const { email, senha } = request.body;

    const editUserPasswordUseCase = new EditUserPasswordUseCase();

    const res = await editUserPasswordUseCase.execute({
      email,
      senha,
    });

    return response.json(res);
  }
}
