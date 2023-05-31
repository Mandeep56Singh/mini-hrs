import { Test, TestingModule } from '@nestjs/testing';
import { ProgramEnrollmentsController } from './program-enrollments.controller';
import { PatientsService } from '../patients/patients.service';
import { ProgramsService } from '../programs/programs.service';
import { LocationsService } from '../locations/locations.service';
import { ProgramEnrollmentsService } from './program-enrollments.service';

const mockPatientsService = {

};
const mockProgramsService = {

};
const mockLocationsService = {

};
const mockProgramEnrollmentsService = {

};

describe('ProgramEnrollmentsController', () => {
  let controller: ProgramEnrollmentsController;
  let patientsService: PatientsService;
  let programsService: ProgramsService;
  let locationsService: LocationsService;
  let programEnrollmentsService: ProgramEnrollmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: PatientsService,
          useValue: mockPatientsService
        },
        {
          provide: ProgramsService,
          useValue: mockProgramsService
        },
        {
          provide: LocationsService,
          useValue: mockLocationsService
        },
        {
          provide: ProgramEnrollmentsService,
          useValue: mockProgramEnrollmentsService
        }
      ],
      controllers: [ProgramEnrollmentsController],
    }).compile();

    controller = module.get<ProgramEnrollmentsController>(
      ProgramEnrollmentsController
    );
    patientsService = module.get<PatientsService>(PatientsService);
    programsService = module.get<ProgramsService>(ProgramsService);
    locationsService = module.get<LocationsService>(LocationsService);
    programEnrollmentsService = module.get<ProgramEnrollmentsService>(ProgramEnrollmentsService);
  });

  describe('program enrollment controller and its dependancies should be defined',()=>{

    it('program enrollments controller should be defined', () => {
      expect(controller).toBeDefined();
    });
    it('patients service should be defined', () => {
      expect(patientsService).toBeDefined();
    });
    it('programs service should be defined', () => {
      expect(programsService).toBeDefined();
    });
    it('locations service should be defined', () => {
      expect(locationsService).toBeDefined();
    });
    it('program enrollments service should be defined', () => {
      expect(programEnrollmentsService).toBeDefined();
    });

  });
});
