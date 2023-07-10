import { Test, TestingModule } from '@nestjs/testing';
import { AnswerTypeController } from './answer-type.controller';

describe('AnswerTypeController', () => {
  let controller: AnswerTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnswerTypeController],
    }).compile();

    controller = module.get<AnswerTypeController>(AnswerTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
