import { Test, TestingModule } from '@nestjs/testing';
import { VisitTypesService } from './visit-types.service';

describe('VisitTypesService', () => {
  let service: VisitTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VisitTypesService],
    }).compile();

    service = module.get<VisitTypesService>(VisitTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
