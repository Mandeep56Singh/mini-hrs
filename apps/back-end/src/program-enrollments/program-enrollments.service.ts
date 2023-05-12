import { Injectable } from '@nestjs/common';
import { PrismaService } from '../app/prisma/prisma.service';
import { CreateProgramEnrollmentDto } from './dtos/create-program-enrollment.dto';

@Injectable()
export class ProgramEnrollmentsService {
    constructor(private prismaService: PrismaService){

    }
    findAll(){
        return this.prismaService.programEnrollment.findMany({
            select:{
                uuid: true,
                startDate: true,
                endDate: true,
                patient: {
                    select: {
                        uuid: true
                    }
                },
                program: {
                   select:{
                      uuid: true,
                      name: true
                   }
                },
                location: {
                    select:{
                        uuid: true,
                        name: true
                    }
                }
            },
        });
    }
    create(body: CreateProgramEnrollmentDto){
      return this.prismaService.programEnrollment.create({
          data: {
            programId: parseInt(body.programId),
            patientId: parseInt(body.patientId),
            locationId: parseInt(body.locationId),
            startDate: new Date(body.startDate)
          }
      });
    }
    findPatientEnrollments(patientUuid: string,completed: boolean){
        return this.prismaService.programEnrollment.findMany({
            where: {
                patient:{
                    uuid:patientUuid
                },
                endDate: completed ? null : { not: null }
            },
            select:{
                uuid: true,
                startDate: true,
                endDate: true,
                patient:{
                    select:{
                        uuid: true
                    }
                },
                program:{
                    select:{
                        name: true,
                        uuid: true
                    }
                },
                location:{
                    select:{
                        name: true,
                        uuid: true
                    }
                }
            }
        });
    }
}
