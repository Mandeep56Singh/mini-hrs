import { Test, TestingModule } from '@nestjs/testing';
import { AnswerService } from './answer.service';

const mockAnswerService = {};

describe('AnswerService', () => {
  let answerService: AnswerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AnswerService,
          useValue: mockAnswerService,
        },
      ],
    }).compile();

    answerService = module.get<AnswerService>(AnswerService);
  });

  it('answer service should be defined', () => {
    expect(answerService).toBeDefined();
  });
});
