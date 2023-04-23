import { hash } from 'bcrypt';
import { prisma } from '../../../../database/prismaClient';

interface IEditUserPassword {
  email: string;
  senha: string;
}

export class EditUserPasswordUseCase {
  async execute({ email, senha }: IEditUserPassword) {
    const hashPassword = await hash(senha, 10);

    const user = await prisma.usuarios.update({
      where: {
        email,
      },
      data: {
        senha: hashPassword,
      },
    });

    return user;
  }
}
