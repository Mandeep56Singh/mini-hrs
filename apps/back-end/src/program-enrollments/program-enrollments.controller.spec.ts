import { Test, TestingModule } from '@nestjs/testing';
import { ProgramEnrollmentsController } from './program-enrollments.controller';

describe('ProgramEnrollmentsController', () => {
  let controller: ProgramEnrollmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgramEnrollmentsController],
    }).compile();

    controller = module.get<ProgramEnrollmentsController>(
      ProgramEnrollmentsController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
