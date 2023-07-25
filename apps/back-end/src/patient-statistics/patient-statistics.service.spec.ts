import { Test, TestingModule } from '@nestjs/testing';
import { PatientStatisticsService } from './patient-statistics.service';
import { VisitsService } from '../visits/visits.service';
import { EncountersService } from '../encounters/encounters.service';
import { ProgramEnrollmentsService } from '../program-enrollments/program-enrollments.service';
import { PatientsService } from '../patients/patients.service';
import { ProgramsService } from '../programs/programs.service';
import { FormService } from '../form/form.service';
import { LocationsService } from '../locations/locations.service';

const mockVisitsService = {};
const mockEncountersService = {};
const mockProgramEnrollmentsService = {};
const mockPatientService = {};
const mockProgramsService = {};
const mockFormService = {};
const mockLocationService = {};

describe('PatientStatisticsService', () => {
  let service: PatientStatisticsService;
  let visitsService: VisitsService;
  let encountersService: EncountersService;
  let programEnrollmentsService: ProgramEnrollmentsService;
  let patientService: PatientsService;
  let programService: ProgramsService;
  let formService: FormService;
  let locationService: LocationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PatientStatisticsService,
        {
          provide: VisitsService,
          useValue: mockVisitsService,
        },
        {
          provide: EncountersService,
          useValue: mockEncountersService,
        },
        {
          provide: ProgramEnrollmentsService,
          useValue: mockProgramEnrollmentsService,
        },
        {
          provide: PatientsService,
          useValue: mockPatientService,
        },
        {
          provide: ProgramsService,
          useValue: mockProgramsService,
        },
        {
          provide: FormService,
          useValue: mockFormService,
        },
        {
          provide: LocationsService,
          useValue: mockLocationService,
        },
      ],
    }).compile();

    service = module.get<PatientStatisticsService>(PatientStatisticsService);
    visitsService = module.get<VisitsService>(VisitsService);
    encountersService = module.get<EncountersService>(EncountersService);
    programEnrollmentsService = module.get<ProgramEnrollmentsService>(
      ProgramEnrollmentsService
    );
    patientService = module.get<PatientsService>(PatientsService);
    programService = module.get<ProgramsService>(ProgramsService);
    formService = module.get<FormService>(FormService);
    locationService = module.get<LocationsService>(LocationsService);
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
  it('patient service should be defined', () => {
    expect(patientService).toBeDefined();
  });
  it('program service should be defined', () => {
    expect(programService).toBeDefined();
  });
  it('form service should be defined', () => {
    expect(formService).toBeDefined();
  });
  it('location service should be defined', () => {
    expect(locationService).toBeDefined();
  });
});
