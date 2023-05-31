import { Test, TestingModule } from '@nestjs/testing';
import { ProgramEnrollmentsService } from './program-enrollments.service';
import { PrismaService } from '../app/prisma/prisma.service';

const mockPrismaService = {

};

describe('ProgramEnrollmentsService', () => {
  let service: ProgramEnrollmentsService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProgramEnrollmentsService,
        {
          provide: PrismaService,
          useValue: mockPrismaService
        }
      ],
    }).compile();

    service = module.get<ProgramEnrollmentsService>(ProgramEnrollmentsService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('program-enrollments service should be defined', () => {
    expect(service).toBeDefined();
  });
  it('prisma should be defined', () => {
    expect(prismaService).toBeDefined();
  });
});
