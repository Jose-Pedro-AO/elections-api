import { prisma } from '../../../../database/prismaClient';

interface IESelectEleicao {
  userId: number;
}

export class SelectAllEleicaoUserUseCase {
  async execute({ userId }: IESelectEleicao) {
    const eleicaos = await prisma.eleicao.findMany({
      where: {
        userId: userId,
      },
      include: {
        candidato: {
          orderBy: {
            datePayment: 'desc',
          },
          take: 1,
        },
      },
    });

    const currentDate = new Date();

    const eleicaosWithPaymentStatus = eleicaos.map(eleicao => {
      const latestPaymentDate =
        eleicao.candidato.length > 0 ? eleicao.candidato[0].datePayment : null;
      const isPaid = latestPaymentDate && latestPaymentDate >= currentDate;
      return {
        ...eleicao,
        isPaid: isPaid,
      };
    });

    return eleicaosWithPaymentStatus;
  }
}
