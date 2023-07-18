import { Injectable } from '@nestjs/common';
import { AnswerType } from '@prisma/client';
import { PrismaService } from '../app/prisma/prisma.service';

@Injectable()
export class AnswerTypeService {
  constructor(private prismaService: PrismaService) {}
  findAll() {
    return this.prismaService.answerType.findMany({
      select: {
        uuid: true,
        name: true,
      },
      where: {
        voided: false,
      },
    });
  }
  createOne(name: string): Promise<AnswerType> {
    return this.prismaService.answerType.create({
      data: {
        name: name,
      },
    });
  }
  findIdByName(answerType: string) {
    return this.prismaService.answerType.findFirstOrThrow({
      where: {
        name: answerType,
      },
      select: {
        id: true,
      },
    });
  }
  findIdByUuid(uuid: string) {
    return this.prismaService.answerType.findFirstOrThrow({
      where: {
        uuid: uuid,
      },
      select: {
        id: true,
      },
    });
  }
}
