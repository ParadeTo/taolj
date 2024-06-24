import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserService } from 'src/modules/user/user.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().res.req;
    const headers = req.headers;
    if (!headers.authorization) return false;
    const token = headers.authorization.split(' ')[1];
    try {
      const user = await this.userService.verify(token);
      if (user) {
        req.user = user;
        return true;
      }
    } catch (error) {
      return false;
    }
  }
}
