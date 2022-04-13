import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsEmpty, IsNotEmpty, IsString } from 'class-validator';
import { RegisterAuthenticationDto } from './register-authentication.dto';

export class UpdateAuthenticationDto extends PartialType(RegisterAuthenticationDto) {
  @IsNotEmpty()
  @IsString()
    name: string;
  @IsNotEmpty()
  @IsString()
    password: string;
}
