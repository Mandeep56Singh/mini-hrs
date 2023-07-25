import { Body, Controller, Get, Post } from '@nestjs/common';
import { Answer } from '@prisma/client';
import { AnswerService } from './answer.service';
import { AnsDto, AnswerDto, CreateAnswerDto } from './dtos/create-answer.dto';
import { QuestionService } from '../question/question.service';
import { EncountersService } from '../encounters/encounters.service';

@Controller('answer')
export class AnswerController {
  constructor(
    private answerService: AnswerService,
    private qstnService: QuestionService,
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
    const { answer, questionUuid } = ans;
    const qstn = await this.qstnService.findByUuid(questionUuid);
    const questionId = qstn.id;
    const ansType = qstn.answerType;
    const payload: AnswerDto = {
      questionId: questionId,
      encounterId: encounterId,
    };
    if (ansType.name === 'Text') {
      payload['valueText'] = answer as string;
    } else if (ansType.name === 'Number') {
      payload['valueNumber'] = parseInt(answer as string);
    } else if (ansType.name === 'Date' || ansType.name === 'DateTime') {
      payload['valueDateTime'] = new Date(answer as unknown as Date);
    }
    return this.answerService.createOne(payload);
  }
}
