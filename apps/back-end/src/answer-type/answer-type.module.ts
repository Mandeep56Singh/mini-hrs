import { Module } from '@nestjs/common';
import { AnswerTypeController } from './answer-type.controller';
import { AnswerTypeService } from './answer-type.service';
import { PrismaService } from '../app/prisma/prisma.service';

@Module({
  controllers: [AnswerTypeController],
  providers: [AnswerTypeService, PrismaService],
})
export class AnswerTypeModule {}
