import { Test, TestingModule } from '@nestjs/testing';
import { AnswerTypeService } from './answer-type.service';

const mockAnswerTypeService = {};

describe('AnswerTypeService', () => {
  let answerTpeservice: AnswerTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AnswerTypeService,
          useValue: mockAnswerTypeService,
        },
      ],
    }).compile();

    answerTpeservice = module.get<AnswerTypeService>(AnswerTypeService);
  });

  it('should be defined', () => {
    expect(answerTpeservice).toBeDefined();
  });
});
