import { Test, TestingModule } from '@nestjs/testing';
import { PatientsService } from './patients.service';
import { PrismaService } from '../app/prisma/prisma.service';

const mockPrismaService = {

};

describe('PatientsService', () => {
  let service: PatientsService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PatientsService,
        {
          provide: PrismaService,
          useValue: mockPrismaService
        }
      ],
    }).compile();

    service = module.get<PatientsService>(PatientsService);
    prismaService = module.get<PrismaService>(PatientsService);
  });

  it('patients service should be defined', () => {
    expect(service).toBeDefined();
  });
  it('prisma service should be defined', () => {
    expect(prismaService).toBeDefined();
  });
});
