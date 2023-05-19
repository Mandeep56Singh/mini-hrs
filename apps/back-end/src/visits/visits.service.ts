import { Injectable } from '@nestjs/common';
import { PrismaService } from '../app/prisma/prisma.service';
import { CreateVisitPayload, EndVisitPayload } from './dtos/create-visit.dto';

@Injectable()
export class VisitsService {
  constructor(private prismaService: PrismaService) {}
  findAll() {
    return this.prismaService.visit.findMany({
      select: {
        uuid: true,
        visitDate: true,
        visitEnd: true,
        patient: {
          select: {
            uuid: true,
          },
        },
        visitType: {
          select: {
            uuid: true,
            name: true,
          },
        },
        location: {
          select: {
            uuid: true,
            name: true,
          },
        },
        encounters:{
          select:{
            uuid: true,
            encounterDate: true,
            location:{
              select:{
                uuid: true,
                name: true
              }
            },
            encounterType:{
              select:{
                name: true,
                uuid: true
              }
            }
          }
        }
      },
    });
  }
  create(body: CreateVisitPayload) {
    return this.prismaService.visit.create({
      data: {
        visitDate: body.visitDate,
        patientId: body.patientId,
        locationId: body.locationId,
        visitTypeId: body.visitTypeId,
      },
      select: {
        uuid: true,
        visitDate: true,
        visitEnd: true,
        patient: {
          select: {
            uuid: true,
          },
        },
        visitType: {
          select: {
            uuid: true,
            name: true,
          },
        },
        location: {
          select: {
            uuid: true,
            name: true,
          },
        },
      },
    });
  }
  findPatientVisits(patientId: number) {
    return this.prismaService.visit.findMany({
      where: {
        patientId: patientId,
      },
      orderBy:{
        visitDate: 'desc'
      },
      select: {
        uuid: true,
        visitDate: true,
        visitEnd: true,
        location: {
          select: {
            uuid: true,
            name: true,
          },
        },
        visitType: {
          select: {
            uuid: true,
            name: true,
          },
        },
        encounters:{
          select:{
            uuid: true,
            encounterDate: true,
            location:{
              select:{
                uuid: true,
                name: true
              }
            },
            encounterType:{
              select:{
                name: true,
                uuid: true
              }
          }
          }
        }
      },
    });
  }
  findIdFromUuid(uuid: string) {
    return this.prismaService.visit.findFirstOrThrow({
      where: {
        uuid: uuid,
      },
      select: {
        id: true,
      },
    });
  }
  endVisit(body: EndVisitPayload) {
    return this.prismaService.visit.update({
      where: {
        id: body.visitId,
      },
      data: {
        visitEnd: body.visitEnd,
      },
    });
  }
  findPatientVisitsCount(patientId: number){
      return this.prismaService.visit.count({
        where:{
          patientId: patientId
        }
       });
  }
}
