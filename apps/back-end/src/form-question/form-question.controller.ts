import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { FormService } from '../form/form.service';
import { QuestionService } from '../question/question.service';
import {
  CreateFormQuestionDto,
  CreateFormQuestionsPayload,
} from './dtos/create-form-question.dto';
import { FormQuestionService } from './form-question.service';

@UseGuards(JwtAuthGuard)
@Controller('form-question')
export class FormQuestionController {
  constructor(
    private formQuestionService: FormQuestionService,
    private formService: FormService,
    private questionService: QuestionService
  ) {}
  @Get()
  findMany() {
    return this.formQuestionService.findMany();
  }
  @Get(':formUuid')
  findFormQuestions(@Query() formUuid: string) {
    console.log('formUuid', formUuid);
    return this.formService.findFormQuestionsByUuid(formUuid);
  }
  @Post()
  async createFormQuestion(@Body() body: CreateFormQuestionDto) {
    const { formUuid, questions } = body;
    const form = await this.formService.findIdFromUuid(formUuid);
    const formId = form.id;
    const formQstns: CreateFormQuestionsPayload[] = [];
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const dbQstn = await this.questionService.findIdFromUuid(q.questionUuid);
      formQstns.push({
        formId: formId,
        questionId: dbQstn.id,
      });
    }
    return this.formQuestionService.createMany(formQstns);
  }
}
