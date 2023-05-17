import { Test, TestingModule } from '@nestjs/testing';
import { EncountersService } from './encounters.service';

describe('EncountersService', () => {
  let service: EncountersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EncountersService],
    }).compile();

    service = module.get<EncountersService>(EncountersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
