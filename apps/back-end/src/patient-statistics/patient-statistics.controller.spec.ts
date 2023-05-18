import { Test, TestingModule } from '@nestjs/testing';
import { PatientStatisticsController } from './patient-statistics.controller';

describe('PatientStatisticsController', () => {
  let controller: PatientStatisticsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatientStatisticsController],
    }).compile();

    controller = module.get<PatientStatisticsController>(
      PatientStatisticsController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
