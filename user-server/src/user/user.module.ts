import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({ secret: 'hard!to-guess_secret' })],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
