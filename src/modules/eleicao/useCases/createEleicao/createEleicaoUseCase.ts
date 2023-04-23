import { hash } from 'bcrypt';
import { prisma } from '../../../../database/prismaClient';

interface ICreateEleicao {
  tipoEleicao: string;
  dataInicio: Date;
  dataFim: Date;
  numPartidos: number;
}

export class CreateEleicaoUseCase {
  async execute({
    tipoEleicao,
    dataInicio,
    dataFim,
    numPartidos,
  }: ICreateEleicao) {
    const eleicao = await prisma.eleicao.create({
      data: {
        tipoEleicao,
        dataInicio,
        dataFim,
        numPartidos,
      },
    });

    return eleicao;
  }
}
