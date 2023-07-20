import { Module } from '@nestjs/common';
import { PrismaService } from '../app/prisma/prisma.service';
import { FormService } from '../form/form.service';
import { QuestionService } from '../question/question.service';
import { FormQuestionController } from './form-question.controller';
import { FormQuestionService } from './form-question.service';

@Module({
  controllers: [FormQuestionController],
  providers: [FormQuestionService, PrismaService, FormService, QuestionService],
})
export class FormQuestionModule {}
