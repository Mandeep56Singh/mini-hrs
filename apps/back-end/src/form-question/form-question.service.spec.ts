import { Test, TestingModule } from '@nestjs/testing';
import { FormQuestionService } from './form-question.service';

const mockFormQuestionService = {};

describe('FormQuestionService', () => {
  let formQuestionService: FormQuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: FormQuestionService,
          useValue: mockFormQuestionService,
        },
      ],
    }).compile();

    formQuestionService = module.get<FormQuestionService>(FormQuestionService);
  });

  it('form question service should be defined', () => {
    expect(formQuestionService).toBeDefined();
  });
});
