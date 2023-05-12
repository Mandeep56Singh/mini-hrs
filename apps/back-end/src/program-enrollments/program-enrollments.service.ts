import { Injectable } from '@nestjs/common';
import { PrismaService } from '../app/prisma/prisma.service';
import { CreateProgramEnrollmentDto } from './dtos/create-program-enrollment.dto';

@Injectable()
export class ProgramEnrollmentsService {
    constructor(private prismaService: PrismaService){

    }
    findAll(){
        return this.prismaService.programEnrollment.findMany();
    }
    create(body: CreateProgramEnrollmentDto){
         return this.prismaService.programEnrollment.create({
             data: {
             }
         });
    }
}
