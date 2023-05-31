import { Test, TestingModule } from '@nestjs/testing';
import { LocationsService } from './locations.service';
import { PrismaService } from '../app/prisma/prisma.service';

const mockPrismaService = {

};

describe('LocationsService', () => {
  let service: LocationsService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LocationsService,
        {
          provide: PrismaService,
          useValue: mockPrismaService
        }
      ],
    }).compile();

    service = module.get<LocationsService>(LocationsService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('location service should be defined', () => {
    expect(service).toBeDefined();
  });
  it('prisma service should be defined', () => {
    expect(prismaService).toBeDefined();
  });
});
