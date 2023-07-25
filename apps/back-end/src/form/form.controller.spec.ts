import { Test, TestingModule } from '@nestjs/testing';
import { EncounterTypesService } from '../encounter-types/encounter-types.service';
import { FormController } from './form.controller';
import { FormService } from './form.service';

const mockFormService = {};
const mockEncounterTypeService = {};

describe('FormController', () => {
  let formController: FormController;
  let formService: FormService;
  let encounterTypeService: EncounterTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormController],
      providers: [
        {
          provide: FormService,
          useValue: mockFormService,
        },
        {
          provide: EncounterTypesService,
          useValue: mockEncounterTypeService,
        },
      ],
    }).compile();

    formController = module.get<FormController>(FormController);
    formService = module.get<FormService>(FormService);
    encounterTypeService = module.get<EncounterTypesService>(
      EncounterTypesService
    );
  });

  it('form controller should be defined', () => {
    expect(formController).toBeDefined();
  });
  it('form service should be defined', () => {
    expect(formService).toBeDefined();
  });
  it('encounter-type service should be defined', () => {
    expect(encounterTypeService).toBeDefined();
  });
});
