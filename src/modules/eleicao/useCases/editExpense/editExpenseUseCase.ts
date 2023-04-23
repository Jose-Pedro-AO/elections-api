import { prisma } from '../../../../database/prismaClient';

interface IEditEleicao {
  id: number;
  descri: string;
  value: number;
  accountId: string;
  payRange: number;
  paymentDivision: string;
  type: string;
}

export class EditEleicaoUseCase {
  async execute({
    id,
    descri,
    value,
    accountId,
    payRange,
    paymentDivision,
    type,
  }: IEditEleicao) {
    const eleicao = await prisma.eleicao.update({
      where: {
        id,
      },
      data: {
        descri,
        value,
        accountId,
        payRange,
        paymentDivision,
        type,
      },
    });

    return eleicao;
  }
}
