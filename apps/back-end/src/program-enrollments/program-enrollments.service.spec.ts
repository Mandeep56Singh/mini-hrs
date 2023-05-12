import { Test, TestingModule } from '@nestjs/testing';
import { ProgramEnrollmentsService } from './program-enrollments.service';

describe('ProgramEnrollmentsService', () => {
  let service: ProgramEnrollmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgramEnrollmentsService],
    }).compile();

    service = module.get<ProgramEnrollmentsService>(ProgramEnrollmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
