import { Resolver, Query, Args } from '@nestjs/graphql';
import { User } from 'src/models';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => String)
  async login(
    @Args('username', { type: () => String }) username: string,
    @Args('password', { type: () => String }) password: string,
  ) {
    const token = await this.userService.login(username, password);
    return token.content;
  }
  @Query(() => User)
  async user(@Args('token', { type: () => String }) token: string) {
    const user = await this.userService.verify(token);
    return user;
  }
}
