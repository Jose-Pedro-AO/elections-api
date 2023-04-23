import { prisma } from '../../../../database/prismaClient';

interface ISelectByIdVoto {
  id: number;
}

export class SelectByIdVotoUseCase {
  async execute({ id }: ISelectByIdVoto) {
    const voto = await prisma.account.findFirst({
      where: {
        id,
      },
      select: {
        numAccount: true,
        iban: true,
        balance: true,
        userId: true,
      },
    });

    return voto;
  }
}
