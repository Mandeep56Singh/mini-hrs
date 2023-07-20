import { Injectable } from '@nestjs/common';
import { PrismaService } from '../app/prisma/prisma.service';

@Injectable()
export class FormQuestionService {
  constructor(private prismaService: PrismaService) {}
  findMany() {
    return this.prismaService.formQuestion.findMany({
      select: {
        uuid: true,
        form: {
          select: {
            uuid: true,
            name: true,
          },
        },
        question: {
          select: {
            uuid: true,
            question: true,
          },
        },
      },
    });
  }
}
