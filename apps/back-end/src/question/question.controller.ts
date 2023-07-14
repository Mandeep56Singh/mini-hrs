import { Body, Controller, Get, Post } from '@nestjs/common';
import { Question } from '@prisma/client';
import { CreateQuestionDto } from './dtos/create-question.dto';
import { QuestionService } from './question.service';
import { AnswerTypeService } from '../answer-type/answer-type.service';

@Controller('question')
export class QuestionController {
  constructor(
    private questionService: QuestionService,
    private ansTypeService: AnswerTypeService
  ) {}
  @Get()
  findAll(): Promise<Question[]> {
    return this.questionService.findAll();
  }

  @Post()
  async createOne(@Body() body: CreateQuestionDto) {
    const { question, answerTypeUuid } = body;
    const ansType = await this.ansTypeService.findIdByUuid(answerTypeUuid);
    const payload = {
      question: question,
      answerTypeId: ansType.id,
    };
    return this.questionService.createOne(payload);
  }
}
