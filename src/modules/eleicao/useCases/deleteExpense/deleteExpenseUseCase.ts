import { prisma } from '../../../../database/prismaClient';

interface IDeleteEleicao {
  id: number;
}

export class DeleteEleicaoUseCase {
  async execute({ id }: IDeleteEleicao) {
    const deleteEleicao = prisma.eleicao.deleteMany({
      where: {
        id,
      },
    });

    const eleicao = await prisma.$transaction([deleteEleicao]);

    return eleicao;
  }
}
