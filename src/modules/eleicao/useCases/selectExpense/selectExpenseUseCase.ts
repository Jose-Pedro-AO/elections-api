import { prisma } from '../../../../database/prismaClient';

interface ISelectEleicao {
  id: number;
}

export class SelectEleicaoUseCase {
  async execute({ id }: ISelectEleicao) {
    const eleicao = await prisma.eleicao.findFirst({
      where: {
        id,
      },
      select: {
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
