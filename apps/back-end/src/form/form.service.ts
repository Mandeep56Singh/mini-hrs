import { Injectable } from '@nestjs/common';
import { Form } from '@prisma/client';
import { PrismaService } from '../app/prisma/prisma.service';
import { CreateFormPayload } from './dtos/create-form.dto';
import { FormDto } from './dtos/form.dto';

@Injectable()
export class FormService {
  constructor(private prismaService: PrismaService) {}

  findMany(): Promise<FormDto[]> {
    return this.prismaService.form.findMany({
      select: {
        name: true,
        uuid: true,
        encounterType: {
          select: {
            uuid: true,
            name: true,
          },
        },
      },
      where: {
        voided: false,
      },
    });
  }
  create(payload: CreateFormPayload): Promise<Form> {
    return this.prismaService.form.create({
      data: {
        name: payload.name,
        encounterTypeId: payload.encounterTypeId,
      },
    });
  }
}
