import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { Test } from '@prisma/client'

@Injectable()
export class AppService {
  constructor(private prismaService: PrismaService){

  }
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
  getTestData(): Promise<Test[]>{
     return this.prismaService.test.findMany();
  }
  saveTestData(body: Partial<Test>){
    const { value } = body;
     return this.prismaService.test.create({
       data: {
         value: value
       }
     });
  }
}
