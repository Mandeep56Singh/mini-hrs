import { Test, TestingModule } from '@nestjs/testing';
import { AnswerTypeService } from './answer-type.service';

describe('AnswerTypeService', () => {
  let service: AnswerTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnswerTypeService],
    }).compile();

    service = module.get<AnswerTypeService>(AnswerTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
