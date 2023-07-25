import { Injectable } from '@nestjs/common';
import { PrismaService } from '../app/prisma/prisma.service';
import { CreateProgramDto } from './dtos/create-program.dto';

@Injectable()
export class ProgramsService {
  constructor(private prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.program.findMany();
  }
  create(body: CreateProgramDto) {
    return this.prismaService.program.create({
      data: {
        name: body.name,
      },
    });
  }
  findByUuid(uuid: string) {
    return this.prismaService.program.findFirstOrThrow({
      where: {
        uuid: uuid,
      },
    });
  }
  findIdFromUuid(uuid: string) {
    return this.prismaService.program.findFirstOrThrow({
      where: {
        uuid: uuid,
      },
      select: {
        id: true,
      },
    });
  }
  count() {
    return this.prismaService.program.count({
      where: {
        voided: false,
      },
    });
  }
}
