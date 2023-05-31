import { Test, TestingModule } from '@nestjs/testing';
import { VisitsController } from './visits.controller';

import { PatientsService } from '../patients/patients.service';
import { LocationsService } from '../locations/locations.service';
import { VisitTypesService } from '../visit-types/visit-types.service';
import { VisitsService } from './visits.service';

const mockPatientsService = {

};
const mockLocationsService = {

};
const mockVisitTypesService = {

};
const mockVisitsService = {

};

describe('VisitsController', () => {
  let controller: VisitsController;
  let patientsService: PatientsService;
  let locationsService: LocationsService;
  let visitsService: VisitsService;
  let visitTypeService: VisitTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: PatientsService,
          useValue: mockPatientsService
        },
        {
          provide: LocationsService,
          useValue: mockLocationsService
        },
        {
          provide: VisitTypesService,
          useValue: mockVisitTypesService
        },
        {
          provide: VisitsService,
          useValue: mockVisitsService
        }
      ],
      controllers: [VisitsController],
    }).compile();

    controller = module.get<VisitsController>(VisitsController);
    patientsService = module.get<PatientsService>(PatientsService);
    locationsService = module.get<LocationsService>(LocationsService);
    visitTypeService = module.get<VisitTypesService>(VisitTypesService);
    visitsService = module.get<VisitsService>(VisitsService);
  });

  it('visits controller should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('patients service should be defined', () => {
    expect(patientsService).toBeDefined();
  });
  it('locations service should be defined', () => {
    expect(locationsService).toBeDefined();
  });
  it('visit types service should be defined', () => {
    expect(visitTypeService).toBeDefined();
  });
  it('visits service should be defined', () => {
    expect(visitsService).toBeDefined();
  });
});
