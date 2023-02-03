import { Module } from '@nestjs/common';
import { ItemService } from '../item/item.service';
import { UserModule } from '../user/user.module';
import { OrderResolver } from './order.resolver';
import { OrderService } from './order.service';

@Module({
  imports: [UserModule],
  providers: [OrderResolver, OrderService, ItemService],
})
export class OrderModule {}
