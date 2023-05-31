import { Test, TestingModule } from '@nestjs/testing';
import { EncounterTypesController } from './encounter-types.controller';
import { VisitTypesService } from '../visit-types/visit-types.service';
import { EncounterTypesService } from './encounter-types.service';

const mockEncounterTypeService = {

};

const mockVisitTypesService = {

};

describe('EncounterTypesController', () => {
  let controller: EncounterTypesController;
  let encounterTypesService: EncounterTypesService;
  let visitTypesService: VisitTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers:[
        {
          provide: EncounterTypesService,
          useValue: mockEncounterTypeService
        },
        {
          provide: VisitTypesService,
          useValue: mockVisitTypesService
        }
      ],
      controllers: [EncounterTypesController],
    }).compile();

    controller = module.get<EncounterTypesController>(EncounterTypesController);
    encounterTypesService = module.get<EncounterTypesService>(EncounterTypesService);
    visitTypesService = module.get<VisitTypesService>(VisitTypesService);
  });

  it('encounter-types controller should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('encounter-types service should be defined', () => {
    expect(encounterTypesService).toBeDefined();
  });
  it('visit-types service should be defined', () => {
    expect(visitTypesService).toBeDefined();
  });
});
