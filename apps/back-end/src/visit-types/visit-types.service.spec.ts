import { Test, TestingModule } from '@nestjs/testing';
import { VisitTypesService } from './visit-types.service';
import { PrismaService } from '../app/prisma/prisma.service';

const mockPrismaService = {

};

describe('VisitTypesService', () => {
  let service: VisitTypesService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VisitTypesService,
        {
          provide: PrismaService,
          useValue: mockPrismaService
        }
      ],
    }).compile();

    service = module.get<VisitTypesService>(VisitTypesService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('visit-type service should be defined', () => {
    expect(service).toBeDefined();
  });
  it('prisma service should be defined', () => {
    expect(prismaService).toBeDefined();
  });
});
