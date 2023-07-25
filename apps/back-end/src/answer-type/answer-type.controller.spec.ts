import { Test, TestingModule } from '@nestjs/testing';
import { AnswerTypeController } from './answer-type.controller';
import { AnswerTypeService } from './answer-type.service';

const mockAnswerTypeService = {};
describe('AnswerTypeController', () => {
  let answerTypeController: AnswerTypeController;
  let answerTypeService: AnswerTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnswerTypeController],
      providers: [
        {
          provide: AnswerTypeService,
          useValue: mockAnswerTypeService,
        },
      ],
    }).compile();

    answerTypeController =
      module.get<AnswerTypeController>(AnswerTypeController);
    answerTypeService = module.get<AnswerTypeService>(AnswerTypeService);
  });

  it('answer-type controller should be defined', () => {
    expect(answerTypeController).toBeDefined();
  });
  it('answer-type service should be defined', () => {
    expect(answerTypeService).toBeDefined();
  });
});
