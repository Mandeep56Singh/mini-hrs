import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Form } from '@prisma/client';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateFormDto } from './dtos/create-form.dto';
import { FormDto } from './dtos/form.dto';
import { FormService } from './form.service';

@UseGuards(JwtAuthGuard)
@Controller('form')
export class FormController {
  constructor(private formsService: FormService) {}
  @Get()
  findMany(): Promise<FormDto[]> {
    return this.formsService.findMany();
  }
  @Post()
  create(@Body() body: CreateFormDto): Promise<Form> {
    return this.formsService.create(body);
  }
}
