import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { PrismaService } from '../app/prisma/prisma.service';

@Module({
  providers: [PrismaService,LocationsService],
  controllers: [LocationsController],
})
export class LocationsModule {}
