import { Test, TestingModule } from '@nestjs/testing';
import { VisitTypesController } from './visit-types.controller';
import { VisitTypesService } from './visit-types.service';
import { ProgramsService } from '../programs/programs.service';

const mockVisitTypesService = {

};

const mockProgramsService = {

};

describe('VisitTypesController', () => {
  let controller: VisitTypesController;
  let visitTypeService: VisitTypesService;
  let programService: ProgramsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers:[
        {
          provide: VisitTypesService,
          useValue: mockVisitTypesService
        },
        {
          provide: ProgramsService,
          useValue: mockProgramsService
        }
      ],
      controllers: [VisitTypesController],
    }).compile();

    controller = module.get<VisitTypesController>(VisitTypesController);
    visitTypeService = module.get<VisitTypesService>(VisitTypesService);
    programService = module.get<ProgramsService>(ProgramsService);
  });

  it('visit-types controller should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('visit-types service should be defined', () => {
    expect(visitTypeService).toBeDefined();
  });
  it('programs service should be defined', () => {
    expect(programService).toBeDefined();
  });
});
