import { Test, TestingModule } from '@nestjs/testing';
import { QuestionService } from './question.service';

const mockQuestionService = {};

describe('QuestionService', () => {
  let questionService: QuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: QuestionService,
          useValue: mockQuestionService,
        },
      ],
    }).compile();

    questionService = module.get<QuestionService>(QuestionService);
  });

  it('should be defined', () => {
    expect(questionService).toBeDefined();
  });
});
