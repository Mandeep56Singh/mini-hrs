import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { FormService } from '../form/form.service';
import { FormQuestionService } from './form-question.service';

@UseGuards(JwtAuthGuard)
@Controller('form-question')
export class FormQuestionController {
  constructor(
    private formQuestionService: FormQuestionService,
    private formService: FormService
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
}
