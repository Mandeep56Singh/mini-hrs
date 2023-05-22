import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { createPatientDto, Patient, SearchPatientResponseDto } from './dtos/patient.dto';

@Controller('patients')
export class PatientsController {
  constructor(private patientsService: PatientsService) {}

  @Get()
  findAll() : Promise<Patient[]>{
    return this.patientsService.findAll();
  }
  @Get('search')
  findOne(@Query() req: { identifier: string }): Promise<SearchPatientResponseDto[]>{
    const { identifier } = req;
    return this.patientsService.findByIdentifier(identifier);
  }
  @Post()
  create(@Body() body: createPatientDto): Promise<Patient>{
    const payload = body;
    return this.patientsService.create(payload);
  }
  @Get(':uuid')
  findByUuid(@Param('uuid') uuid: string):Promise<Patient>{
    return this.patientsService.findByUuid(uuid);
  }
}
