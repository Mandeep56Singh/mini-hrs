import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import { jwtConstants } from './constants';

const promisifiedScrypt = promisify(scrypt);

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(userName: string, password: string) {
    const dbUsers = await this.usersService.findOne(userName);
    if (dbUsers.length === 0)
      throw new NotFoundException('Wrong username or password!');

    const user = dbUsers[0];
    const [dbSalt, dbPassword] = user.passWord.split('.');
    const hash = (await promisifiedScrypt(password, dbSalt, 32)) as Buffer;
    const hashedPw = hash.toString('hex');

    if (dbPassword !== hashedPw) throw new NotFoundException();

    const result = {
      id: user.id,
      userName: user.userName,
    };

    return result;
  }
  async login(user: { userName: string; id: number }) {
    const payload = { username: user.userName, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      expires_at: this.getTokenExpiryTime(),
    };
  }
  async signUp(username: string, password: string) {
    const dbUsers = await this.usersService.findOne(username);
    if (dbUsers.length > 0) {
      throw new BadRequestException('user already in use');
    }

    const salt = randomBytes(8).toString('hex');
    const hash = (await promisifiedScrypt(password, salt, 32)) as Buffer;
    const hashedAndSaltedPw = salt + '.' + hash.toString('hex');

    return this.usersService.create(username, hashedAndSaltedPw);
  }
  private getTokenExpiryTime(): number {
    const now = new Date();
    const expiryTime = jwtConstants.expiresInS;
    const expiry = now.setSeconds(now.getSeconds() + expiryTime);
    return expiry;
  }
}
