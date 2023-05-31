import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const mockAppService = {
  getData: jest.fn(() => {
    return { message: 'Hello API' };
  }),
};

describe('AppController', () => {
  let appModule: TestingModule;
  let appService: AppService;
  let appController: AppController;

  beforeAll(async () => {
    appModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: mockAppService,
        },
      ],
    }).compile();

    appController = appModule.get<AppController>(AppController);
    appService = appModule.get<AppService>(AppService);
  });

  describe('app controller and dependencies defined', () => {
    it('app controller should be defined', () => {
      expect(appController).toBeDefined();
    });

    it('app service should be defined', () => {
      expect(appService).toBeDefined();
    });
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      jest.spyOn(appService, 'getData');
      const receivedMsg = appController.getData();
      expect(appService.getData).toHaveBeenCalled();
      expect(receivedMsg).toEqual({ message: 'Hello API' });
    });
  });
});
