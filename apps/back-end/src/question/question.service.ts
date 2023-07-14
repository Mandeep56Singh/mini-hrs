import { Injectable } from '@nestjs/common';
import { PrismaService } from '../app/prisma/prisma.service';

@Injectable()
export class QuestionService {
  constructor(private prismaService: PrismaService) {}
  findAll() {
    return this.prismaService.question.findMany();
  }
  createOne(q: { question: string; answerTypeId: number }) {
    return this.prismaService.question.create({
      data: {
        question: q.question,
        answerTypeId: q.answerTypeId,
      },
    });
  }
  findIdFromUuid(uuid: string) {
    return this.prismaService.question.findFirstOrThrow({
      where: {
        uuid: uuid,
      },
      select: {
        id: true,
      },
    });
  }
  findByUuid(uuid: string) {
    return this.prismaService.question.findFirstOrThrow({
      where: {
        uuid: uuid,
      },
      select: {
        id: true,
        answerType: {
          select: {
            id: true,
            uuid: true,
            name: true,
          },
        },
      },
    });
  }
}
