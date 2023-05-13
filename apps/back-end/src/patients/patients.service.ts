import { Injectable } from '@nestjs/common';
import { Patient } from '@prisma/client';
import { PrismaService } from '../app/prisma/prisma.service';
import { createPatientDto } from './dtos/create-patient.dto';

@Injectable()
export class PatientsService {
  constructor(private prismaService: PrismaService) {}
  findAll() {
    return this.prismaService.patient.findMany({
      include: {
        patientNames: true,
        patientIdentifiers: true,
      },
    });
  }
  create(body: createPatientDto): Promise<Patient> {
    return this.prismaService.patient.create({
      data: {
        gender: body.gender,
        dob: new Date(body.dob),
        patientNames: {
          create: {
            firstName: body.patientNames.firstName,
            lastName: body.patientNames.lastName,
          },
        },
        patientIdentifiers: {
          create: {
            identifier: body.patientIdentifiers.identifier,
          },
        },
      },
    });
  }
  findByIdentifier(identifier: string) {
    return this.prismaService.patientIdentifier.findMany({
      where: {
        identifier: identifier,
      },
      include: {
        patient: {
          include:{
            patientNames: true,
            patientIdentifiers: true
          }
        }
      },
    });
  }
  findByUuid(uuid: string): Promise<Patient> {
    return this.prismaService.patient.findFirstOrThrow({
      where: {
        uuid: uuid,
      },
      include: {
        patientIdentifiers: true,
        patientNames: true,
      },
    });
  }
  findIdFromUuid(uuid: string){
    return this.prismaService.patient.findFirstOrThrow({
      where: {
        uuid: uuid,
      },
      select:{
        id: true
      }
    });
  }
}
