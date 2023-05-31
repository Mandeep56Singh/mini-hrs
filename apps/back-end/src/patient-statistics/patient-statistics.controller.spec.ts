import { Test, TestingModule } from '@nestjs/testing';
import { PatientStatisticsController } from './patient-statistics.controller';
import { PatientStatisticsService } from './patient-statistics.service';
import { PatientsService } from '../patients/patients.service';

const mockPatientsService = {};
const mockPatientsStatisticsService = {};

describe('PatientStatisticsController', () => {
  let controller: PatientStatisticsController;
  let patientsService: PatientsService;
  let patientStatisticsService: PatientStatisticsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: PatientsService,
          useValue: mockPatientsService,
        },
        {
          provide: PatientStatisticsService,
          useValue: mockPatientsStatisticsService,
        },
      ],
      controllers: [PatientStatisticsController],
    }).compile();

    controller = module.get<PatientStatisticsController>(
      PatientStatisticsController
    );
    patientsService = module.get<PatientsService>(PatientsService);
    patientStatisticsService = module.get<PatientStatisticsService>(
      PatientStatisticsService
    );
  });

  describe('patients statistics controller and its dependancies should be defined', () => {
    it('patient statistics controller should be defined', () => {
      expect(controller).toBeDefined();
    });
    it('patients service should be defined', () => {
      expect(patientsService).toBeDefined();
    });
    it('patients statistics service should be defined', () => {
      expect(patientStatisticsService).toBeDefined();
    });
  });
});
