import { prisma } from '../../../../database/prismaClient';

export class SelectUserUseCase {
  async execute() {
    const user = await prisma.usuarios.findMany({
      include: {
        candidato: {
          orderBy: {
            nome: 'desc',
          },
          take: 1,
        },
      },
    });

    return user;
  }
}
