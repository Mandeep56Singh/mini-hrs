import { Test, TestingModule } from '@nestjs/testing';
import { LocationsController } from './locations.controller';
import { LocationsService } from './locations.service';

const mockLocationsService = {

};

describe('LocationsController', () => {
  let controller: LocationsController;
  let locationsService: LocationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: LocationsService,
          useValue: mockLocationsService
        }
      ],
      controllers: [LocationsController],
    }).compile();

    controller = module.get<LocationsController>(LocationsController);
    locationsService = module.get<LocationsService>(LocationsService);
  });

  it('locations controller should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('locations service should be defined', () => {
    expect(locationsService).toBeDefined();
  });
});
