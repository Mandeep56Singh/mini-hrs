import { Test, TestingModule } from '@nestjs/testing';
import { FormService } from '../form/form.service';
import { QuestionService } from '../question/question.service';
import { FormQuestionController } from './form-question.controller';
import { FormQuestionService } from './form-question.service';

const mockFormQuestionService = {};
const mockFormService = {};
const mockQuestionService = {};

describe('FormQuestionController', () => {
  let formQuestionController: FormQuestionController;
  let formQuestionService: FormQuestionService;
  let formService: FormService;
  let questionService: QuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormQuestionController],
      providers: [
        {
          provide: FormQuestionService,
          useValue: mockFormQuestionService,
        },
        {
          provide: FormService,
          useValue: mockFormService,
        },
        {
          provide: QuestionService,
          useValue: mockQuestionService,
        },
      ],
    }).compile();

    formQuestionController = module.get<FormQuestionController>(
      FormQuestionController
    );
    formQuestionService = module.get<FormQuestionService>(FormQuestionService);
    formService = module.get<FormService>(FormService);
    questionService = module.get<QuestionService>(QuestionService);
  });

  it('form question controller should be defined', () => {
    expect(formQuestionController).toBeDefined();
  });
  it('form question service should be defined', () => {
    expect(formQuestionService).toBeDefined();
  });
  it('form service should be defined', () => {
    expect(formService).toBeDefined();
  });
  it('question service should be defined', () => {
    expect(questionService).toBeDefined();
  });
});
