import { hash } from 'bcrypt';
import { prisma } from '../../../../database/prismaClient';

interface ICreateCandidato {
  eleicaoId: number;
  usuarioId: number;
  partido: number;
  imagem: string;
}

export class CreateCandidatoUseCase {
  async execute({ eleicaoId, usuarioId, partido, imagem }: ICreateCandidato) {
    const candidato = await prisma.candidatos.create({
      data: {
        eleicaoId,
        usuarioId,
        partido,
        imagem,
      },
    });

    return candidato;
  }
}
