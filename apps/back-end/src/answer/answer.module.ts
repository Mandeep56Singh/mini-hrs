import { Module } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';
import { PrismaService } from '../app/prisma/prisma.service';
import { QuestionService } from '../question/question.service';
import { EncountersService } from '../encounters/encounters.service';

@Module({
  providers: [AnswerService, PrismaService, QuestionService, EncountersService],
  controllers: [AnswerController],
})
export class AnswerModule {}
