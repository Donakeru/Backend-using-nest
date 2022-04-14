import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { LoginAuthenticationDto } from './dto/login-authentication.dto';
import { RegisterAuthenticationDto } from './dto/register-authentication.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('login')
  loginUser(@Body() userObject: LoginAuthenticationDto) {
    return this.authenticationService.loggearUsuario(userObject);
  }

  @Post('register')
  loggearUsuario(@Body() userObject: RegisterAuthenticationDto) {
    return this.authenticationService.registrarUsuario(userObject);
  }
}
