import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly authService: AuthService){
       super({userNameField: 'userName'});
    }

    async validate(userName: string,passWord: string){
        const user = await this.authService.validateUser(userName,passWord);
        if(!user){
          throw new UnauthorizedException();
        }

        return user;
    }
}