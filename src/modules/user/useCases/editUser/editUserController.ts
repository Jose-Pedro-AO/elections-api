import { Request, Response } from 'express';
import { EditUserUseCase } from './editUserUseCase';

export class EditUserController {
  async handle(request: Request, response: Response) {
    const { nome, bi, email, senha } = request.body;

    const editUserUseCase = new EditUserUseCase();

    const res = await editUserUseCase.execute({
      nome,
      bi,
      email,
      senha,
    });

    return response.json(res);
  }
}
