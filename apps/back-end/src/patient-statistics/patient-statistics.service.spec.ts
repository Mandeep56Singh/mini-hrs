import { Test, TestingModule } from '@nestjs/testing';
import { PatientStatisticsService } from './patient-statistics.service';
import { VisitsService } from '../visits/visits.service';
import { EncountersService } from '../encounters/encounters.service';
import { ProgramEnrollmentsService } from '../program-enrollments/program-enrollments.service';

const mockVisitsService = {

};
const mockEncountersService = {

};
const mockProgramEnrollmentsService = {

};

describe('PatientStatisticsService', () => {
  let service: PatientStatisticsService;
  let visitsService: VisitsService;
  let encountersService: EncountersService;
  let programEnrollmentsService: ProgramEnrollmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PatientStatisticsService,
        {
          provide: VisitsService,
          useValue: mockVisitsService
        },
        {
          provide: EncountersService,
          useValue: mockEncountersService
        },
        {
          provide: ProgramEnrollmentsService,
          useValue: mockProgramEnrollmentsService
        }
      ],
    }).compile();

    service = module.get<PatientStatisticsService>(PatientStatisticsService);
    visitsService = module.get<VisitsService>(VisitsService);
    encountersService = module.get<EncountersService>(EncountersService);
    programEnrollmentsService = module.get<ProgramEnrollmentsService>(ProgramEnrollmentsService);
  });

  it('patient-statistics service should be defined', () => {
    expect(service).toBeDefined();
  });
  it('visits service should be defined', () => {
    expect(visitsService).toBeDefined();
  });
  it('encounters service should be defined', () => {
    expect(encountersService).toBeDefined();
  });
  it('program enrollments service should be defined', () => {
    expect(programEnrollmentsService).toBeDefined();
  });
});
