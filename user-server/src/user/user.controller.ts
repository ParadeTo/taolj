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

const mockUser = { id: 1, name: 'ayou' };

@Controller('user')
@UserServiceControllerMethods()
export class UserController implements UserServiceController {
  constructor(private readonly jwtService: JwtService) {}

  verify(request: Token): User | Promise<User> | Observable<User> {
    const payload = this.jwtService.verify(request.content);
    return payload;
  }
  login(request: LoginParam): Token | Promise<Token> | Observable<Token> {
    const token = this.jwtService.sign(mockUser);
    return { content: token };
  }
  signup(request: SignupParam): Token | Promise<Token> | Observable<Token> {
    return;
  }
}
