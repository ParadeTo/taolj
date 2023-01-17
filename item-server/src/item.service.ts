import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { OrderServiceClient, ORDER_SERVICE_NAME } from './gen-code/order';

@Injectable()
export class ItemService implements OnModuleInit {
  public orderClient: OrderServiceClient;

  constructor(@Inject('orderClient') private client: ClientGrpc) {}

  onModuleInit() {
    this.orderClient =
      this.client.getService<OrderServiceClient>(ORDER_SERVICE_NAME);
  }
}
