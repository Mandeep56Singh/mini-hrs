import { Injectable } from '@nestjs/common';
import { PrismaService } from '../app/prisma/prisma.service';

@Injectable()
export class AnswerService {
  constructor(private prismaService: PrismaService) {}
  findAll() {
    return this.prismaService.answer.findMany();
  }
  createOne(answer: any) {
    return this.prismaService.answer.create({
      data: {
        ...answer,
      },
    });
  }
  findByEncounterId(encounterId: number) {
    return this.prismaService.answer.findMany({
      where: {
        encounterId: encounterId,
      },
    });
  }
}
