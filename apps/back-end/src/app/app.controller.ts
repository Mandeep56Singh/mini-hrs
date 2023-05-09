import { Controller, Get, Post, Body } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('test-data')
  getTestData(){
    return this.appService.getTestData();
  }
  @Post('test-data')
  saveTestData(@Body() body: { value: boolean}){
     return this.appService.saveTestData(body);
  }
}
