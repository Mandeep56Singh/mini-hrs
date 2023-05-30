import { Test, TestingModule } from '@nestjs/testing';
import { EncountersService } from './encounters.service';
import { PrismaService } from '../app/prisma/prisma.service';

const mockPrismaService = {

};

describe('EncountersService', () => {
  let service: EncountersService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EncountersService,
        {
          provide: PrismaService,
          useValue: mockPrismaService
        }
      ],
    }).compile();

    service = module.get<EncountersService>(EncountersService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('encounters service should be defined', () => {
    expect(service).toBeDefined();
  });

  it('prisma service should be defined', () => {
    expect(prismaService).toBeDefined();
  });
});
