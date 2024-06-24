import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { ItemResolver } from './item.resolver';
import { ItemService } from './item.service';

@Module({
  imports: [UserModule],
  providers: [ItemResolver, ItemService],
})
export class ItemModule {}
