import { prisma } from '../../../../database/prismaClient';

interface IDeleteVoto {
  id: number;
}

export class DeleteVotoUseCase {
  async execute({ id }: IDeleteVoto) {
    const voto = await prisma.account.delete({
      where: {
        id,
      },
    });

    return voto;
  }
}
