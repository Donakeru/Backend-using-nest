import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { RegisterAuthenticationDto } from './dto/register-authentication.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

 /*  @Post('login')
  resgisterUser(@Body() createAuthenticationDto: RegisterAuthenticationDto) {
    return this.authenticationService.registrarUsuario(createAuthenticationDto);
  } */

  @Post('register')
  loggearUsuario(@Body() userObject: RegisterAuthenticationDto) {
    return this.authenticationService.registrarUsuario(userObject);
  }
}
