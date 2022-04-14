import { HttpException, Injectable } from '@nestjs/common';
import { RegisterAuthenticationDto } from './dto/register-authentication.dto';
import { Model } from 'mongoose';
import { UserDocument, User } from "src/schemas/user.schema";
import { InjectModel } from '@nestjs/mongoose';
import { LoginAuthenticationDto } from './dto/login-authentication.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService) {}

  async registrarUsuario(userObject: RegisterAuthenticationDto) {
    const { password } = userObject;
    //Encriptar password
    const createdUser =  new this.userModel(userObject);
    return createdUser.save();
  }

  async loggearUsuario(userObject: LoginAuthenticationDto) {
    const { name, password} = userObject;
    const findName = await this.userModel.findOne({name: name});

    //Para generar errores http customizados hacemos uso del throw new seguido de la funcion Http Exception, indicaremos el mensaje de error y el codigo httpReq error
    if (!findName) throw new HttpException('El usuario no fué encontrado', 404);
    const validarContrasena = password == findName.password
    if (!validarContrasena) throw new HttpException('La contraseña ingresada no es correcta', 403);

    //Para hace uso de los JWT es importante que para la encriptación no se usen datos sensibles del usuario. Lo usual es que se encripte el username + id de usuario en la BD
    const payload = { name: findName.name, id: findName._id }
    
    const data = {
      userData: findName,
      token: this.jwtService.sign(payload),
    }

    return data
  }

}

