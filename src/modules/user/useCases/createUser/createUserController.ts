import { Request, Response } from 'express';
import { CreateUserUseCase } from './createUserUseCase';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { nome, bi, email, senha } = request.body;

    const createUserUseCase = new CreateUserUseCase();

    const res = await createUserUseCase.execute({
      nome,
      bi,
      email,
      senha,
    });

    return response.json(res);
  }
}
