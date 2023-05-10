import { Injectable } from '@nestjs/common';
import { Patient } from '@prisma/client';
import { PrismaService } from '../app/prisma/prisma.service';
import { createPatientDto } from './dtos/create-patient.dto';

@Injectable()
export class PatientsService {
    constructor(private prismaService: PrismaService){

    }
    findAll(){
        return this.prismaService.patient.findMany({
            include:{
                patientNames: true,
                patientIdentifiers: true
            }
        });
    }
    create(body: createPatientDto): Promise<Patient>{
        return this.prismaService.patient.create({
            data:{
                patientNames: {
                    create: {
                        firstName: body.patientNames.firstName,
                        lastName: body.patientNames.lastName
                    }
                },
                patientIdentifiers:{
                    create:{
                        identifier: body.patientIdentifiers.identifier
                    }
                }
            }
        });
    }
}
