import { Test, TestingModule } from '@nestjs/testing';
import { VisitTypesController } from './visit-types.controller';

describe('VisitTypesController', () => {
  let controller: VisitTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VisitTypesController],
    }).compile();

    controller = module.get<VisitTypesController>(VisitTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
