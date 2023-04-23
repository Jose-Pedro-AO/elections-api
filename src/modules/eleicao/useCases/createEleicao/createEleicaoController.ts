import { Request, Response } from 'express';
import { CreateEleicaoUseCase } from './createEleicaoUseCase';

export class CreateEleicaoController {
  async handle(request: Request, response: Response) {
    const { tipoEleicao, dataInicio, dataFim, numPartidos } = request.body;

    const createEleicaoUseCase = new CreateEleicaoUseCase();

    const res = await createEleicaoUseCase.execute({
      tipoEleicao,
      dataInicio,
      dataFim,
      numPartidos,
    });

    return response.json(res);
  }
}
