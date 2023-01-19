import { Module } from '@nestjs/common';
import { ItemService } from '../item/item.service';
import { OrderResolver } from './order.resolver';
import { OrderService } from './order.service';

@Module({
  providers: [OrderResolver, OrderService, ItemService],
})
export class OrderModule {}
