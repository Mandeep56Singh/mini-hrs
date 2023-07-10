import { Injectable } from '@nestjs/common';
import { PrismaService } from '../app/prisma/prisma.service';

@Injectable()
export class QuestionService {
  constructor(private prismaService: PrismaService) {}
  findAll() {
    return this.prismaService.question.findMany();
  }
  createOne(question: string) {
    return this.prismaService.question.create({
      data: {
        question: question,
      },
    });
  }
}
