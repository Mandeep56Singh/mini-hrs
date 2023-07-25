import { Test, TestingModule } from '@nestjs/testing';
import { FormService } from './form.service';

class mockFormService {}

describe('FormService', () => {
  let formService: FormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: FormService,
          useClass: mockFormService,
        },
      ],
    }).compile();

    formService = module.get<FormService>(FormService);
  });

  it('should be defined', () => {
    expect(formService).toBeDefined();
  });
});
