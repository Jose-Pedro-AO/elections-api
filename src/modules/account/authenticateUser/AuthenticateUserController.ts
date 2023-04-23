import { Request, Response } from 'express';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, senha } = request.body;

    const authenticateUserUseCase = new AuthenticateUserUseCase();

    const res = await authenticateUserUseCase.execute({
      email,
      senha,
    });

    return response.json(res);
  }
}
