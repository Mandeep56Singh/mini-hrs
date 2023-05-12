import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ProgramEnrollmentsService } from './program-enrollments.service';
import { CreateProgramEnrollmentDto } from './dtos/create-program-enrollment.dto';

@Controller('program-enrollments')
export class ProgramEnrollmentsController {
    constructor(private programEnrollmentService: ProgramEnrollmentsService){

    }
    
    @Get()
    findAll(){
        return this.programEnrollmentService.findAll();
    }
    @Get('patient')
    findOne(@Query() req: { patientUuid: string; completed: string }){
      const { patientUuid, completed } = req;
      const completedProgram = completed === 'true' ? true : false
      return this.programEnrollmentService.findPatientEnrollments(patientUuid,completedProgram);
    }
    @Post()
    create(@Body() body: CreateProgramEnrollmentDto){
        return this.programEnrollmentService.create(body);
    }
}
