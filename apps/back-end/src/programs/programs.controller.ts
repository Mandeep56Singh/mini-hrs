import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ProgramsService } from './programs.service';
import { CreateProgramDto } from './dtos/create-program.dto';
import { Program } from '@prisma/client';

@Controller('programs')
export class ProgramsController {
    constructor(private programsService: ProgramsService){

    }

    @Get()
    findAll(): Promise<Program[]>{
        return this.programsService.findAll();
    }
    @Post()
    create(@Body() body: CreateProgramDto): Promise<Program>{
        return this.programsService.create(body);
    }
    @Get(':uuid')
    findByUuid(@Param('uuid') uuid: string):Promise<Program>{
       return this.programsService.findByUuid(uuid);
    }
}
