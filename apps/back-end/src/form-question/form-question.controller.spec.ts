import { Test, TestingModule } from '@nestjs/testing';
import { FormQuestionController } from './form-question.controller';

describe('FormQuestionController', () => {
  let controller: FormQuestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormQuestionController],
    }).compile();

    controller = module.get<FormQuestionController>(FormQuestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
