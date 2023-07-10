import { Body, Controller, Get, Post } from '@nestjs/common';
import { Answer } from '@prisma/client';
import { AnswerService } from './answer.service';
import { AnsDto, AnswerDto, CreateAnswerDto } from './dtos/create-answer.dto';
import { QuestionService } from '../question/question.service';
import { AnswerTypeService } from '../answer-type/answer-type.service';
import { EncountersService } from '../encounters/encounters.service';

@Controller('answer')
export class AnswerController {
  constructor(
    private answerService: AnswerService,
    private qstnService: QuestionService,
    private ansTypeService: AnswerTypeService,
    private encounterService: EncountersService
  ) {}
  @Get()
  findAll(): Promise<Answer[]> {
    return this.answerService.findAll();
  }
  @Post()
  async create(@Body() body: CreateAnswerDto) {
    const { encounterUuid, answers } = body;
    const encounter = await this.encounterService.findEncounterIdFromUuid(
      encounterUuid
    );
    const encounterId = encounter.id;
    for (let i = 0; i < answers.length; i++) {
      const qstn = answers[i];
      await this.createOne(qstn, encounterId);
    }
    return this.answerService.findByEncounterId(encounterId);
  }
  async createOne(ans: AnsDto, encounterId: number) {
    const { answer, questionUuid, answerType } = ans;
    const qstn = await this.qstnService.findIdFromUuid(questionUuid);
    const questionId = qstn.id;
    const ansType = await this.ansTypeService.findIdByName(answerType);
    const answerTypeId = ansType.id;
    const payload: AnswerDto = {
      questionId: questionId,
      answerTypeId: answerTypeId,
      encounterId: encounterId,
    };
    if (answerType === 'Text') {
      payload['valueText'] = answer as string;
    } else if (answerType === 'Number') {
      payload['valueNumber'] = parseInt(answer as string);
    } else if (answerType === 'Date' || answerType === 'Datetime') {
      payload['valueDateTime'] = new Date(answer as unknown as Date);
    }
    return this.answerService.createOne(payload);
  }
}
