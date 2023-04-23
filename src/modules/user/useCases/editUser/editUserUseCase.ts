import { prisma } from '../../../../database/prismaClient';

interface IEditUser {
  nome: string;
  bi: string;
  email: string;
  senha: String;
}

export class EditUserUseCase {
  async execute({ nome, bi, email }: IEditUser) {
    const user = await prisma.usuarios.update({
      where: {
        email,
        bi,
      },
      data: {
        nome,
      },
    });

    return user;
  }
}
