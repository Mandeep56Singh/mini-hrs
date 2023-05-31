import { Test, TestingModule } from '@nestjs/testing';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';

const mockPatientsService = {

};
describe('PatientsController', () => {
  let controller: PatientsController;
  let patientsService: PatientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers:[
        {
          provide: PatientsService,
          useValue: mockPatientsService
        }
      ],
      controllers: [
        PatientsController
      ],
    }).compile();

    controller = module.get<PatientsController>(PatientsController);
    patientsService = module.get<PatientsService>(PatientsService);
  });

  it('patients controller should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('patients service should be defined', () => {
    expect(patientsService).toBeDefined();
  });
});
