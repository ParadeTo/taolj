import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { RPCService } from '../rpc/rpc.service';
import { Token, User } from 'src/gen-code/user';

@Injectable()
export class UserService {
  constructor(private rpcService: RPCService) {}

  async login(username: string, password: string): Promise<Token> {
    return await lastValueFrom(
      this.rpcService.userServiceClient.login({ username, password }),
    );
  }

  async verify(token: string): Promise<User> {
    return await lastValueFrom(
      this.rpcService.userServiceClient.verify({ content: token }),
    );
  }
}
