//DTO: Data Transfer Object // Objeto de transferencia de datos.
/*Hace la validacion de los campos enviados por el metodo http para al final ejecutar la acción principal en este caso de registro */
import { IsNotEmpty, IsNumber, IsString, Length, Min } from "class-validator";

export class RegisterAuthenticationDto {
    @IsNotEmpty()
  @IsString()
  @Length(1, 50)
    name:string;

  @IsNotEmpty()
  @IsNumber()
  @Min(18)
    age:number;

  @IsNotEmpty()
  @IsString()
  @Length(5, 100)
    ocupation:string;

  @IsNotEmpty()
  @IsString()
    password: string;
}
