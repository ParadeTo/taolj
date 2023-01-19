import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { OrderServiceClient, ORDER_SERVICE_NAME } from '../../gen-code/order';
import {
  Item,
  ItemServiceClient,
  ITEM_SERVICE_NAME,
} from '../../gen-code/item';
import { lastValueFrom } from 'rxjs';
import { RPCService } from '../rpc/rpc.service';

@Injectable()
export class ItemService {
  constructor(private rpcService: RPCService) {}

  async findOne(id: number): Promise<Item> {
    return await lastValueFrom(
      this.rpcService.itemServiceClient.findOne({ id }),
    );
  }
}
