import { Test, TestingModule } from '@nestjs/testing';
import { EncountersController } from './encounters.controller';
import { LocationsService } from '../locations/locations.service';
import { PatientsService } from '../patients/patients.service';
import { VisitsService } from '../visits/visits.service';
import { EncounterTypesService } from '../encounter-types/encounter-types.service';
import { EncountersService } from './encounters.service';

const mockLocationsService = {

};
const mockPatientsService = {

};
const mockVisitsService = {

};
const mockEncountersService = {

};
const mockEncounterTypeService = {

};

describe('EncountersController', () => {
  let controller: EncountersController;
  let locationsService: LocationsService;
  let patientsService: PatientsService;
  let visitsService: VisitsService;
  let encountersService: EncountersService;
  let encounterTypesService: EncounterTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide:LocationsService,
          useValue: mockLocationsService
        },
        {
          provide: PatientsService,
          useValue: mockPatientsService
        },
        {
          provide: VisitsService,
          useValue: mockVisitsService
        },
        {
          provide: EncountersService,
          useValue: mockEncountersService
        },
        {
          provide: EncounterTypesService,
          useValue: mockEncounterTypeService
        }
      ],
      controllers: [EncountersController],
    }).compile();

    controller = module.get<EncountersController>(EncountersController);
    locationsService = module.get(LocationsService);
    patientsService = module.get(PatientsService);
    visitsService = module.get(VisitsService);
    encountersService = module.get(EncountersService);
    encounterTypesService = module.get(EncounterTypesService);
  });

  describe('encounters controller and its dependancies should be defined',()=>{

    it('encounters controller should be defined', () => {
      expect(controller).toBeDefined();
    });

    it('locations service should be defined', () => {
      expect(locationsService).toBeDefined();
    });
    it('patients service should be defined', () => {
      expect(patientsService).toBeDefined();
    });
    it('visits service should be defined', () => {
      expect(visitsService).toBeDefined();
    });
    it('encounters service should be defined', () => {
      expect(encountersService).toBeDefined();
    });
    it('encounter types service should be defined', () => {
      expect(encounterTypesService).toBeDefined();
    });

  });

});
