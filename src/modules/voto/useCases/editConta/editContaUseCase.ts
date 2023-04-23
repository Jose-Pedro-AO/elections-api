import { prisma } from '../../../../database/prismaClient';

interface IEditVoto {
  id: number;
  numAccount: string;
  iban: string;
  balance: number;
  userId: number;
}

export class EditVotoUseCase {
  async execute({ id, numAccount, iban, balance, userId }: IEditVoto) {
    const voto = await prisma.account.update({
      where: {
        id,
      },
      data: {
        numAccount,
        iban,
        balance,
        userId,
      },
    });

    return voto;
  }
}
