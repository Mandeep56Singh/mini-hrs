import { Injectable } from '@nestjs/common';
import { PrismaService } from '../app/prisma/prisma.service';
import { CreateEnrollmentBody } from './dtos/create-program-enrollment.dto';

@Injectable()
export class ProgramEnrollmentsService {
  constructor(private prismaService: PrismaService) {}
  findAll() {
    return this.prismaService.programEnrollment.findMany({
      select: {
        uuid: true,
        startDate: true,
        endDate: true,
        patient: {
          select: {
            uuid: true,
          },
        },
        program: {
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
  create(body: CreateEnrollmentBody) {
    return this.prismaService.programEnrollment.create({
      data: {
        programId: body.programId,
        patientId: body.patientId,
        locationId: body.locationId,
        startDate: body.startDate,
      },
    });
  }
  findPatientEnrollments(patientUuid: string, completed: boolean) {
    return this.prismaService.programEnrollment.findMany({
      where: {
        patient: {
          uuid: patientUuid,
        },
        endDate: completed ? { not: null } : null,
      },
      select: {
        uuid: true,
        startDate: true,
        endDate: true,
        patient: {
          select: {
            uuid: true,
          },
        },
        program: {
          select: {
            name: true,
            uuid: true,
          },
        },
        location: {
          select: {
            name: true,
            uuid: true,
          },
        },
      },
    });
  }
  complete(payload: { enrollmentId: number; endDate: Date }) {
    return this.prismaService.programEnrollment.update({
      where: {
        id: payload.enrollmentId,
      },
      data: {
        endDate: payload.endDate,
      },
    });
  }
  findIdFromUuid(uuid: string) {
    return this.prismaService.programEnrollment.findFirstOrThrow({
      where: {
        uuid: uuid,
      },
      select: {
        id: true,
      },
    });
  }
  findActivePatientEnrollmentsCount(patientId: number) {
    return this.prismaService.programEnrollment.count({
      where: {
        patientId: patientId,
        endDate: {
          not: null,
        },
      },
    });
  }
  findCompletedPatientEnrollmentsCount(patientId: number) {
    return this.prismaService.programEnrollment.count({
      where: {
        patientId: patientId,
        endDate: null,
      },
    });
  }
  findPatientProgramEnrolmentCount(patientId: number, programId: number) {
    return this.prismaService.programEnrollment.count({
      where: {
        patientId: patientId,
        programId: programId,
        voided: false,
        endDate: {
          not: null,
        },
      },
    });
  }
}
