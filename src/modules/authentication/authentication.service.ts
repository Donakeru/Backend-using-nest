import { Injectable } from '@nestjs/common';
import { RegisterAuthenticationDto } from './dto/register-authentication.dto';
import { Model } from 'mongoose';
import { UserDocument, User } from "src/schemas/user.schema";
import { UpdateAuthenticationDto } from './dto/login-authentication.dto';
import { InjectModel } from '@nestjs/mongoose';
/* import { hash } from 'bcrypt' */

@Injectable()
export class AuthenticationService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async registrarUsuario(userObject: RegisterAuthenticationDto) {
    const { password } = userObject;
    //Encriptar password
    const createdUser =  new this.userModel(userObject);
    return createdUser.save();
  }

  /* loggearUsuario(createAuthenticationDto: RegisterAuthenticationDto) {
    return 'This action adds a new authentication';
  } */

}

