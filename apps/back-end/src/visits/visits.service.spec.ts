import { Test, TestingModule } from '@nestjs/testing';
import { VisitsService } from './visits.service';
import { PrismaService } from '../app/prisma/prisma.service';

const mockPrismaService = {

};

describe('VisitsService', () => {
  let service: VisitsService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VisitsService,
        {
          provide: PrismaService,
          useValue: mockPrismaService
        }
      ],
    }).compile();

    service = module.get<VisitsService>(VisitsService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('visits service should be defined', () => {
    expect(service).toBeDefined();
  });

  it('prisma service should be defined', () => {
    expect(prismaService).toBeDefined();
  });
});
