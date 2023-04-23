import { prisma } from '../../../../database/prismaClient';

interface IEditCandidato {
  id: number;
  value: number;
  eleicaoId: number;
  userId: number;
}

export class EditCandidatoUseCase {
  async execute({ id, value, eleicaoId, userId }: IEditCandidato) {
    const candidato = await prisma.candidato.update({
      where: {
        id,
      },
      data: {
        value,
        eleicaoId,
        userId,
      },
    });

    return candidato;
  }
}
