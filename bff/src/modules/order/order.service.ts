import { Injectable } from '@nestjs/common';
import { Order } from '../../gen-code/Order';
import { lastValueFrom } from 'rxjs';
import { RPCService } from '../rpc/rpc.service';

@Injectable()
export class OrderService {
  constructor(private rpcService: RPCService) {}

  async findOne(id: number): Promise<Order> {
    return await lastValueFrom(
      this.rpcService.orderServiceClient.findOne({ id }),
    );
  }
}
