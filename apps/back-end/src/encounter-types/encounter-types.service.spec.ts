import { Test, TestingModule } from '@nestjs/testing';
import { EncounterTypesService } from './encounter-types.service';
import { PrismaService } from '../app/prisma/prisma.service';

const mockPrismaService = {

};

describe('EncounterTypesService', () => {
  let service: EncounterTypesService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EncounterTypesService,
        {
          provide: PrismaService,
          useValue: mockPrismaService
        }
      ],
    }).compile();

    service = module.get<EncounterTypesService>(EncounterTypesService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('encounter-types service should be defined', () => {
    expect(service).toBeDefined();
  });
  it('prisma service should be defined', () => {
    expect(prismaService).toBeDefined();
  });
});
