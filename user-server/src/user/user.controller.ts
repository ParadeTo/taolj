import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import {
  LoginParam,
  SignupParam,
  Token,
  User,
  UserServiceController,
  UserServiceControllerMethods,
} from 'src/gen-code/user';
import { UserService } from './user.service';

const mockUser = { id: 1, name: 'ayou' };

@Controller('user')
@UserServiceControllerMethods()
export class UserController implements UserServiceController {
  constructor(
    private readonly jwtService: JwtService,
    private userService: UserService,
  ) {}

  verify(request: Token): User | Promise<User> | Observable<User> {
    console.log('===============verify=====================');
    const payload = this.jwtService.verify(request.content);
    return payload;
  }
  login(request: LoginParam): Token | Promise<Token> | Observable<Token> {
    return { content: 'd' };
  }
  async signup(request: SignupParam): Promise<Token> {
    console.log('===============signup=====================');
    const id = await this.userService.insertOne(
      request.username,
      request.password,
    );
    return { content: this.jwtService.sign({ id, name: request.username }) };
  }
}
