import { IsNotEmpty, IsString } from 'class-validator';

export class LoginAuthenticationDto {
  @IsNotEmpty()
  @IsString()
    name: string;
  @IsNotEmpty()
  @IsString()
    password: string;
}
