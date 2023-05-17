import { Injectable } from '@nestjs/common';
import { PrismaService } from '../app/prisma/prisma.service';
import { CreateEncounterTypePayloadDto } from './dtos/encounter-type.dto';

@Injectable()
export class EncounterTypesService {
    constructor(private prismaService: PrismaService){

    }

    findAll(){
        return this.prismaService.encounterType.findMany({
            select:{
                name: true,
                uuid: true,
                visitType:{
                    select:{
                        name: true,
                        uuid: true
                    }
                }
            }
        });
    }
    create(body:CreateEncounterTypePayloadDto){
        return this.prismaService.encounterType.create({
            data:{
                name: body.name,
                visitTypeId: body.visitTypeId
            }
        });
    }
    findIdFromUuid(uuid: string){
         return this.prismaService.encounterType.findFirstOrThrow({
            where: {
                uuid: uuid
            },
            select:{
                id: true
            }
         });
    }

}
