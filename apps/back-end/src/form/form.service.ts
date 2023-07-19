import { Injectable } from '@nestjs/common';
import { Form } from '@prisma/client';
import { PrismaService } from '../app/prisma/prisma.service';
import { CreateFormDto } from './dtos/create-form.dto';
import { FormDto } from './dtos/form.dto';

@Injectable()
export class FormService {
  constructor(private prismaService: PrismaService) {}

  findMany(): Promise<FormDto[]> {
    return this.prismaService.form.findMany({
      select: {
        name: true,
        uuid: true,
      },
      where: {
        voided: false,
      },
    });
  }
  create(payload: CreateFormDto): Promise<Form> {
    return this.prismaService.form.create({
      data: {
        name: payload.name,
      },
    });
  }
}
