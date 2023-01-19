import { Injectable } from '@nestjs/common';
import { Item } from '../../gen-code/item';
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

  async getItems(page: number, pageSize: number): Promise<Item[]> {
    const items = await lastValueFrom(
      this.rpcService.itemServiceClient.getItems({ page, pageSize }),
    );
    return items.list;
  }
}
