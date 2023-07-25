import { Test, TestingModule } from '@nestjs/testing';
import { AnswerTypeService } from '../answer-type/answer-type.service';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';

const mockQuestionService = {};
const mockAnswerTypeService = {};

describe('QuestionController', () => {
  let questionController: QuestionController;
  let questionService: QuestionService;
  let ansTypeService: AnswerTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionController],
      providers: [
        {
          provide: QuestionService,
          useValue: mockQuestionService,
        },
        {
          provide: AnswerTypeService,
          useValue: mockAnswerTypeService,
        },
      ],
    }).compile();

    questionController = module.get<QuestionController>(QuestionController);
    questionService = module.get<QuestionService>(QuestionService);
    ansTypeService = module.get<AnswerTypeService>(AnswerTypeService);
  });

  it('question controller should be defined', () => {
    expect(questionController).toBeDefined();
  });
  it('question service should be defined', () => {
    expect(questionService).toBeDefined();
  });
  it('answer type service should be defined', () => {
    expect(ansTypeService).toBeDefined();
  });
});
