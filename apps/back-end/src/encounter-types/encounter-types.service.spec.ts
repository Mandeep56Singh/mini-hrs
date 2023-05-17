import { Test, TestingModule } from '@nestjs/testing';
import { EncounterTypesService } from './encounter-types.service';

describe('EncounterTypesService', () => {
  let service: EncounterTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EncounterTypesService],
    }).compile();

    service = module.get<EncounterTypesService>(EncounterTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
