import { Test, TestingModule } from '@nestjs/testing';
import { FormQuestionService } from './form-question.service';

describe('FormQuestionService', () => {
  let service: FormQuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormQuestionService],
    }).compile();

    service = module.get<FormQuestionService>(FormQuestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
