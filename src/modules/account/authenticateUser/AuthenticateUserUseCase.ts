import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import auth from '../../../config/auth';
import { prisma } from '../../../database/prismaClient';

interface IAuthenticateUser {
  email: string;
  senha: string;
}

export class AuthenticateUserUseCase {
  async execute({ email, senha }: IAuthenticateUser) {
    const user = await prisma.users.findFirst({
      where: {
        email,
      },
      select: {
        id: true,
        nome: true,
        email: true,
        bi: true,
        tipoUsuario: true,
      },
    });

    if (!user) {
      throw new Error('Email or password invalid');
    }

    const passwordMatch = await compare(senha, user.senha);

    if (!passwordMatch) {
      throw new Error('User or password invalid');
    }
    // const token = sign({ email }, '49fb96f0ed1a4b5a3a80763d4ff762da', {
    //   subject: user.id,
    //   expiresIn: '1d',
    // });
    const token = sign({ id: email }, String(process.env.JWT_SECRET), {
      expiresIn: '1d',
    });

    const userWithoutPassword = {
      id: user.id,
      nome: user.nome,
      email: user.email,
      bi: user.bi,
      tipoUsuario: user.tipoUsuario,
    };

    return { user: userWithoutPassword, token };
  }
}
