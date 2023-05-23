import {
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Body,
} from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { SignUpDto } from './dtos/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('sign-up')
  signUpUser(@Body() body: SignUpDto) {
    const { username, password } = body;
    return this.authService.signUp(username, password);
  }

  @UseGuards(JwtAuthGuard)
  @Get('test-guard')
  getProfile(@Request() req) {
    return req.user;
  }
}
