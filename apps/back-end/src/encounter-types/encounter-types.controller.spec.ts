import { Test, TestingModule } from '@nestjs/testing';
import { EncounterTypesController } from './encounter-types.controller';

describe('EncounterTypesController', () => {
  let controller: EncounterTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EncounterTypesController],
    }).compile();

    controller = module.get<EncounterTypesController>(EncounterTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
