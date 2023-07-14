import { Module } from '@nestjs/common';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { PrismaService } from '../app/prisma/prisma.service';
import { AnswerTypeService } from '../answer-type/answer-type.service';

@Module({
  controllers: [QuestionController],
  providers: [QuestionService, PrismaService, AnswerTypeService],
})
export class QuestionModule {}
