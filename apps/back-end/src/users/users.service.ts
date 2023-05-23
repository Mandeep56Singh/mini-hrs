import { Injectable } from '@nestjs/common';
import { PrismaService } from '../app/prisma/prisma.service';
@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async findOne(userName: string) {
    const user = await this.prismaService.user.findMany({
      where: {
        userName: userName,
      },
      select: {
        id: true,
        userName: true,
        passWord: true,
      },
    });

    return user;
  }

  async create(
    username: string,
    password: string
  ): Promise<{ id: number; userName: string }> {
    const newUser = await this.prismaService.user.create({
      data: {
        userName: username,
        passWord: password,
      },
      select: {
        id: true,
        userName: true,
      },
    });

    return newUser;
  }
}
