import { Injectable } from '@nestjs/common';
import { PrismaService } from '../app/prisma/prisma.service';
import { CreateLocationDto } from './dtos/create-locations.dto';

@Injectable()
export class LocationsService {
    constructor(private prismaService: PrismaService){

    }
    findAll(){
        return this.prismaService.location.findMany({
            select:{
                name: true,
                uuid: true
            }
        });
    }
    findByUuid(uuid: string){
        return this.prismaService.location.findFirstOrThrow({
            where:{
                uuid: uuid
            },
            select: {
                name: true,
                uuid: true
            }
        });
    }
    create(body: CreateLocationDto){
       return this.prismaService.location.create({
           data: {
            name: body.name
           }
       });
    }
    findIdFromUuid(uuid: string){
        return this.prismaService.location.findFirstOrThrow({
            where:{
                uuid: uuid
            },
            select: {
               id: true
            }
        });
    }
}
