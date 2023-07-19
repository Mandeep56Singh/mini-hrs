import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Form } from '@prisma/client';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { EncounterTypesService } from '../encounter-types/encounter-types.service';
import { CreateFormDto, CreateFormPayload } from './dtos/create-form.dto';
import { FormDto } from './dtos/form.dto';
import { FormService } from './form.service';

@UseGuards(JwtAuthGuard)
@Controller('form')
export class FormController {
  constructor(
    private formsService: FormService,
    private encounterTypeService: EncounterTypesService
  ) {}
  @Get()
  findMany(): Promise<FormDto[]> {
    return this.formsService.findMany();
  }
  @Post()
  async create(@Body() body: CreateFormDto): Promise<Form> {
    const { name, encounterTypeUuid } = body;
    const encounterType = await this.encounterTypeService.findIdFromUuid(
      encounterTypeUuid
    );
    const payload: CreateFormPayload = {
      name: name,
      encounterTypeId: encounterType.id,
    };
    return this.formsService.create(payload);
  }
}
