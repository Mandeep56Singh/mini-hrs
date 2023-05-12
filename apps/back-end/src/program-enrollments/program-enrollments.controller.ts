import { Body, Controller, Get, Post } from '@nestjs/common';
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
    @Post()
    create(@Body() body: CreateProgramEnrollmentDto){
        return this.programEnrollmentService.create(body);
    }
}
