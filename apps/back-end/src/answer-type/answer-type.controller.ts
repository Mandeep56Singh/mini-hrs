import { Body, Controller, Get, Post } from '@nestjs/common';
import { AnswerType } from '@prisma/client';
import { AnswerTypeService } from './answer-type.service';
import { CreateAnswerTypeDto } from './dtos/create-answer-type.dto';

@Controller('answer-type')
export class AnswerTypeController {
  constructor(private answerTypeService: AnswerTypeService) {}
  @Get()
  findAll(): Promise<AnswerType[]> {
    return this.answerTypeService.findAll();
  }
  @Post()
  createOne(@Body() body: CreateAnswerTypeDto): Promise<AnswerType> {
    const { name } = body;
    return this.answerTypeService.createOne(name);
  }
}
