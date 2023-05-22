import { Injectable } from '@nestjs/common';
import { PrismaService } from '../app/prisma/prisma.service';
import { createPatientDto, Patient,  SearchPatientResponseDto } from './dtos/patient.dto';

@Injectable()
export class PatientsService {
  constructor(private prismaService: PrismaService) {}
  async findAll(): Promise<Patient[]>{
    const allPatients = await this.prismaService.patient.findMany({
      select:{
        uuid: true,
        dob: true,
        gender: true,
        patientIdentifiers:{
          select:{
            identifier: true,
            uuid: true
          }
        },
        patientNames:{
          select:{
            uuid: true,
            firstName: true,
            lastName: true
          }
        }
      }
    });
    return allPatients;
  }
  async create(body: createPatientDto): Promise<Patient>{
    const newPatient = this.prismaService.patient.create({
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
      select:{
          uuid: true,
          dob: true,
          gender: true,
          patientNames:{
            select:{
              uuid: true,
              firstName: true,
              lastName: true
            }
          },
          patientIdentifiers:{
            select:{
              uuid: true,
              identifier: true
            }
          }
      }
    });

    return newPatient;
  }
  async findByIdentifier(identifier: string): Promise<SearchPatientResponseDto[]> {
    const patients = await this.prismaService.patientIdentifier.findMany({
      where: {
        identifier: identifier,
      },
      select:{
        patient: {
          select:{
           dob: true,
           gender: true,
           uuid: true,
            patientNames:{
              select:{
                uuid: true,
                firstName: true,
                lastName: true,
              }
            },
            patientIdentifiers:{
               select:{
                uuid: true,
                 identifier: true
               }
            }
          }
        }
      },
    });

    return patients;
  }
  async findByUuid(uuid: string): Promise<Patient> {
    const patient = await this.prismaService.patient.findFirstOrThrow({
      where: {
        uuid: uuid,
      },
      select:{
        dob: true,
        gender: true,
        uuid: true,
         patientNames:{
           select:{
            uuid: true,
             firstName: true,
             lastName: true,
           }
         },
         patientIdentifiers:{
            select:{
              uuid: true,
              identifier: true
            }
         }
       }
    });
    return patient;
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
