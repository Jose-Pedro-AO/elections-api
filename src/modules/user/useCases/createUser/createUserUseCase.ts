import { hash } from 'bcrypt';
import { prisma } from '../../../../database/prismaClient';

interface ICreateUser {
  nome: String;
  bi: String;
  email: String;
  senha: String;
}

export class CreateUserUseCase {
  async execute({ nome, bi, email, senha }: ICreateUser) {
    const userAlreadyExists = await prisma.usuarios.findFirst({
      where: {
        email,
        bi,
      },
    });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const hashPassword = await hash(senha, 10);

    const user = await prisma.usuarios.create({
      data: {
        nome,
        bi,
        email,
        senha: hashPassword,
      },
    });

    return user;
  }
}
