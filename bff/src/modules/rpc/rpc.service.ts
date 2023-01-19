import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { ItemServiceClient, ITEM_SERVICE_NAME } from 'src/gen-code/item';
import { OrderServiceClient, ORDER_SERVICE_NAME } from 'src/gen-code/order';

@Injectable()
export class RPCService implements OnModuleInit {
  public itemServiceClient: ItemServiceClient;
  public orderServiceClient: OrderServiceClient;

  constructor(
    @Inject('ITEM_RPC_CLIENT') private itemRPCClient: ClientGrpc,
    @Inject('ORDER_RPC_CLIENT') private orderRPCClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.itemServiceClient =
      this.itemRPCClient.getService<ItemServiceClient>(ITEM_SERVICE_NAME);
    this.orderServiceClient =
      this.orderRPCClient.getService<OrderServiceClient>(ORDER_SERVICE_NAME);
  }
}
