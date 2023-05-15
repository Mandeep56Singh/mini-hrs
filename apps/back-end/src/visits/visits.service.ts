import { Injectable } from '@nestjs/common';
import { PrismaService } from '../app/prisma/prisma.service';
import { CreateVisitPayload } from './dtos/create-visit.dto';

@Injectable()
export class VisitsService {
    constructor(private prismaService: PrismaService){

    }
    findAll(){
        return this.prismaService.visit.findMany({
            select:{
                uuid: true,
                visitDate: true,
                patient:{
                    select:{
                        uuid: true
                    }
                },
                visitType:{
                    select:{
                        uuid: true,
                        name: true
                    }
                },
                location:{
                    select:{
                        uuid: true,
                        name: true
                    }
                }
            }
        });
    }
    create(body: CreateVisitPayload){
        return this.prismaService.visit.create({
            data:{
                visitDate: body.visitDate,
                patientId: body.patientId,
                locationId: body.locationId,
                visitTypeId: body.visitTypeId
            },
            select:{
                uuid: true,
                visitDate: true,
                patient:{
                    select:{
                        uuid: true
                    }
                },
                visitType:{
                    select:{
                        uuid: true,
                        name: true
                    }
                },
                location:{
                    select:{
                        uuid: true,
                        name: true
                    }
                }
            }
        });

    }
}
