import { Test, TestingModule } from '@nestjs/testing';
import { ProgramsController } from './programs.controller';
import { ProgramsService } from './programs.service';

const mockProgramsService = {};

describe('ProgramsController', () => {
  let controller: ProgramsController;
  let programService: ProgramsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ProgramsService,
          useValue: mockProgramsService,
        },
      ],
      controllers: [ProgramsController],
    }).compile();

    controller = module.get<ProgramsController>(ProgramsController);
    programService = module.get<ProgramsService>(ProgramsService);
  });

  describe('programs controller and its dependancies should be defined', () => {
    it('programs controller should be defined', () => {
      expect(controller).toBeDefined();
    });

    it('programs service should be defined', () => {
      expect(programService).toBeDefined();
    });
  });
});
