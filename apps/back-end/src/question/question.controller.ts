import { Body, Controller, Get, Post } from '@nestjs/common';
import { Question } from '@prisma/client';
import { CreateQuestionDto } from './dtos/create-question.dto';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}
  @Get()
  findAll(): Promise<Question[]> {
    return this.questionService.findAll();
  }

  @Post()
  createOne(@Body() body: CreateQuestionDto) {
    const { question } = body;
    return this.questionService.createOne(question);
  }
}
