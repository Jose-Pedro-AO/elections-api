import { prisma } from '../../../../database/prismaClient';

export class SelectCandidatoUseCase {
  async execute() {
    const candidato = await prisma.candidatos.findMany({
      select: {
        id: true,
        value: true,
        eleicaoId: true,
        status: true,
        userId: true,
        paymentReceive: true,
      },
    });

    return candidato;
  }
}
