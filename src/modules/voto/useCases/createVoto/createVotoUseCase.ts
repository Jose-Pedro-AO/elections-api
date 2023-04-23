import { hash } from 'bcrypt';
import { prisma } from '../../../../database/prismaClient';

interface ICreateVoto {
  usuarioId: number;
  candidatoId: number;
}

export class CreateVotoUseCase {
  async execute({ usuarioId, candidatoId }: ICreateVoto) {
    const usuario = await prisma.usuarios.findUnique({
      where: { id: usuarioId },
    });

    if (usuario.voto) {
      throw new Error('Você já votou nesta eleição!');
    }

    await prisma.usuarios.update({
      where: { id: usuarioId },
      data: { voto: true },
    });

    const voto = await prisma.votos.create({
      data: {
        usuarioId,
        candidatoId,
      },
    });

    return voto;
  }
}
