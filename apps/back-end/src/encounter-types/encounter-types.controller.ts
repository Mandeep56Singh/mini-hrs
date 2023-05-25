import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { EncounterTypesService } from './encounter-types.service';
import { CreateEncounterTypeDto, CreateEncounterTypePayloadDto } from './dtos/encounter-type.dto';
import { VisitTypesService } from '../visit-types/visit-types.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('encounter-types')
export class EncounterTypesController {
    constructor(
        private encounterTypesService: EncounterTypesService,
        private visitTypesService: VisitTypesService ){

    }
    @Get()
    findAll(){
        return this.encounterTypesService.findAll();
    }
    @Post()
    async create(@Body() body: CreateEncounterTypeDto){
       const visitType = await this.visitTypesService.findIdFromUuid(body.visitTypeUuid);
       const payLoad: CreateEncounterTypePayloadDto = {
           name: body.name,
           visitTypeId: visitType.id
       };
       return this.encounterTypesService.create(payLoad);
    }
}
