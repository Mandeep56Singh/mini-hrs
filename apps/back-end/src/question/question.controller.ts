import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { QuestionDto } from './dtos/create-question.dto';
import { CreateQuestionDto } from './dtos/create-question.dto';
import { QuestionService } from './question.service';
import { AnswerTypeService } from '../answer-type/answer-type.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('question')
export class QuestionController {
  constructor(
    private questionService: QuestionService,
    private ansTypeService: AnswerTypeService
  ) {}
  @Get()
  findAll(): Promise<QuestionDto[]> {
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
