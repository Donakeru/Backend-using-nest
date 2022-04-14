import { HttpException, Injectable } from '@nestjs/common';
import { RegisterAuthenticationDto } from './dto/register-authentication.dto';
import { Model } from 'mongoose';
import { UserDocument, User } from "src/schemas/user.schema";
import { InjectModel } from '@nestjs/mongoose';
import { LoginAuthenticationDto } from './dto/login-authentication.dto';

@Injectable()
export class AuthenticationService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async registrarUsuario(userObject: RegisterAuthenticationDto) {
    const { password } = userObject;
    //Encriptar password
    const createdUser =  new this.userModel(userObject);
    return createdUser.save();
  }

  async loggearUsuario(userObject: LoginAuthenticationDto) {
    const { name, password } = userObject;
    const findName = await this.userModel.findOne({name: name});
    //PAra generar errores http customizados hacemos uso del throw new seguido de la funcion Http Exception, indicaremos el mensaje de error y el codigo httpReq error
    if (!findName) throw new HttpException('El usuario no fué encontrado', 404);
    const validarContrasena = password == findName.password
    if (!validarContrasena) throw new HttpException('La contraseña ingresada no es correcta', 403);

    return findName
  }

}

