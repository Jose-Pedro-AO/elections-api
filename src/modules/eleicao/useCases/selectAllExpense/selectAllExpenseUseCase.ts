import { prisma } from '../../../../database/prismaClient';

export class SelectAllEleicaoUseCase {
  async execute() {
    const eleicao = await prisma.eleicao.findMany({
      select: {
        id: true,
        descri: true,
        value: true,
        userId: true,
        payRange: true,
        paymentDivision: true,
        type: true,
      },
    });

    return eleicao;
  }
}
