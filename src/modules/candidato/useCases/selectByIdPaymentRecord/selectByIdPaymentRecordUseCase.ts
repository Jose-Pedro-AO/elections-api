import { prisma } from '../../../../database/prismaClient';

interface ISelectByIdCandidato {
  id: number;
}

export class SelectByIdCandidatoUseCase {
  async execute({ id }: ISelectByIdCandidato) {
    const candidato = await prisma.candidato.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        value: true,
        eleicaoId: true,
        userId: true,
        status: true,
        paymentReceive: true,
      },
    });

    return candidato;
  }
}
