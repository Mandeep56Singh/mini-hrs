import { Test, TestingModule } from '@nestjs/testing';
import { PatientStatisticsService } from './patient-statistics.service';

describe('PatientStatisticsService', () => {
  let service: PatientStatisticsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientStatisticsService],
    }).compile();

    service = module.get<PatientStatisticsService>(PatientStatisticsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
