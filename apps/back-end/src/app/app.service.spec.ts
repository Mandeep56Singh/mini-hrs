import { Test } from '@nestjs/testing';

import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

const mockPrismaService = {

};


describe('AppService', () => {
  let service: AppService;
  let prismaService: PrismaService;

  beforeAll(async () => {
    const appModule = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: PrismaService,
          useValue: mockPrismaService
        }
      ],
    }).compile();

    service = appModule.get<AppService>(AppService);
    prismaService = appModule.get<PrismaService>(PrismaService);
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      expect(service.getData()).toEqual({ message: 'Hello API' });
    });
    it('prisma service should be defined"', () => {
      expect(prismaService).toBeDefined();
    });
  });
});
