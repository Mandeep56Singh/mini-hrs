import { Injectable } from '@nestjs/common';
import { PrismaService } from '../app/prisma/prisma.service';
import { CreateEncountePayloadDto } from './dtos/encounter.dto';

@Injectable()
export class EncountersService {
    constructor(private prismaService: PrismaService){

    }
    findAll(){
        return this.prismaService.encounter.findMany({
            select:{
                uuid: true,
                encounterDate: true,
                location:{
                    select:{
                        uuid: true,
                        name: true
                    }
                },
                visit: {
                    select: {
                        uuid: true
                    }
                },
                encounterType:{
                    select:{
                        uuid: true,
                        name: true
                    }
                }
            }
        });
    }
    create(body: CreateEncountePayloadDto){
         return this.prismaService.encounter.create({
            data:{
                encounterDate: body.encounterDate,
                locationId: body.locationId,
                visitId: body.visitId,
                patientId: body.patientId,
                encounterTypeId: body.encounterTypeId
            }
         });
    }
}
