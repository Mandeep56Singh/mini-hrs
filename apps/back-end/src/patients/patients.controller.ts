import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { Patient } from '@prisma/client';
import { createPatientDto } from './dtos/create-patient.dto';

@Controller('patients')
export class PatientsController {
  constructor(private patientsService: PatientsService) {}

  @Get()
  findAll(): Promise<Patient[]> {
    return this.patientsService.findAll();
  }
  @Get(':uuid')
  findByUuid(@Param('uuid') uuid: string):Promise<Patient>{
    return this.patientsService.findByUuid(uuid);
  }
  @Post()
  create(@Body() body: createPatientDto):Promise<Patient>{
    const payload = body;
    return this.patientsService.create(payload);
  }
  @Get('search')
  findOne(@Query() req: { identifier: string }){
    const { identifier } = req;
    return this.patientsService.findByIdentifier(identifier);
  }
}
