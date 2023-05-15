import { Injectable } from '@nestjs/common';
import { VisitType } from '@prisma/client';
import { PrismaService } from '../app/prisma/prisma.service';

@Injectable()
export class VisitTypesService {
  constructor(private prismaService: PrismaService) {}
  findAll() {
    return this.prismaService.visitType.findMany({
      select: {
        name: true,
        uuid: true,
        program: {
          select: {
            name: true,
            uuid: true,
          },
        },
      },
    });
  }
  create(body: { programId: number; name: string }): Promise<VisitType> {
    return this.prismaService.visitType.create({
      data: {
        programId: body.programId,
        name: body.name,
      },
    });
  }
  findProgramVisitTypes(programId: number) {
    return this.prismaService.visitType.findMany({
      select: {
        name: true,
        uuid: true,
        program: {
          select: {
            name: true,
            uuid: true,
          },
        },
      },
      where: {
        programId: programId,
      },
    });
  }
  findByUuid(uuid: string) {
    return this.prismaService.visitType.findMany({
      where: {
        uuid: uuid,
      },
      select: {
        name: true,
        uuid: true,
        program: {
          select: {
            uuid: true,
            name: true,
          },
        },
      },
    });
  }
}
