import { Test, TestingModule } from '@nestjs/testing';
import { ProgramsService } from './programs.service';
import { PrismaService } from '../app/prisma/prisma.service';

const mockPrismaService = {

};

describe('ProgramsService', () => {
  let service: ProgramsService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProgramsService,
        {
          provide: PrismaService,
          useValue: mockPrismaService
        }
      ],
    }).compile();

    service = module.get<ProgramsService>(ProgramsService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('program service should be defined', () => {
    expect(service).toBeDefined();
  });
  it('prisma service should be defined', () => {
    expect(prismaService).toBeDefined();
  });
});
