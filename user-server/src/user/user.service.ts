import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { hash } from 'bcrypt';
import { User } from 'src/entity/user.entity';

@Injectable()
export class UserService {
  // constructor(
  //   @InjectRepository(User)
  //   private usersRepository: Repository<User>,
  // ) {}
  // findOne(where: FindOptionsWhere<User>): Promise<User> {
  //   return this.usersRepository.findOne({ where });
  // }
  // async insertOne(name: string, password: string) {
  //   try {
  //     const result = await this.usersRepository.insert({
  //       name,
  //       password: await hash(password, 10),
  //     });
  //     return result.generatedMaps[0].id;
  //   } catch (error) {
  //     return null;
  //   }
  // }
  // async remove(id: string): Promise<void> {
  //   await this.usersRepository.delete(id);
  // }
}
