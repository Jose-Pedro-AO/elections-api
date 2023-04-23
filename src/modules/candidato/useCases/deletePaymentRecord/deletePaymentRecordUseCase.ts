import { prisma } from '../../../../database/prismaClient';

interface IDeleteCandidato {
  id: number;
}

export class DeleteCandidatoUseCase {
  async execute({ id }: IDeleteCandidato) {
    const candidato = await prisma.candidato.delete({
      where: {
        id,
      },
    });

    return candidato;
  }
}
