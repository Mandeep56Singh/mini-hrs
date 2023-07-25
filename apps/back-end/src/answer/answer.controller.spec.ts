import { Test, TestingModule } from '@nestjs/testing';
import { EncountersService } from '../encounters/encounters.service';
import { QuestionService } from '../question/question.service';
import { AnswerController } from './answer.controller';
import { AnswerService } from './answer.service';

const mockAnswerService = {};
const mockQuestionService = {};
const mockEncounterService = {};

describe('AnswerController', () => {
  let answerController: AnswerController;
  let answerService: AnswerService;
  let qstnService: QuestionService;
  let encounterService: EncountersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnswerController],
      providers: [
        {
          provide: AnswerService,
          useValue: mockAnswerService,
        },
        {
          provide: QuestionService,
          useValue: mockQuestionService,
        },
        {
          provide: EncountersService,
          useValue: mockEncounterService,
        },
      ],
    }).compile();

    answerController = module.get<AnswerController>(AnswerController);
    answerService = module.get<AnswerService>(AnswerService);
    qstnService = module.get<QuestionService>(QuestionService);
    encounterService = module.get<EncountersService>(EncountersService);
  });

  it('answer controller should be defined', () => {
    expect(answerController).toBeDefined();
  });
  it('question service should be defined', () => {
    expect(qstnService).toBeDefined();
  });
  it('answer service should be defined', () => {
    expect(answerService).toBeDefined();
  });
  it('encounters service should be defined', () => {
    expect(encounterService).toBeDefined();
  });
});
