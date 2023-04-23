import { prisma } from '../../../../database/prismaClient';

export class SelectVotoUseCase {
  async execute() {
    const voto = await prisma.account.findMany({
      select: {
        id: true,
        iban: true,
        balance: true,
        userId: true,
      },
    });

    return voto;
  }
}
