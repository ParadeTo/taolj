import { Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { RPCService } from './rpc.service';

@Global()
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ITEM_RPC_CLIENT',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:9001',
          package: 'item',
          protoPath: join(__dirname, '../../proto/item.proto'),
        },
      },
      {
        name: 'ORDER_RPC_CLIENT',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:9002',
          package: 'order',
          protoPath: join(__dirname, '../../proto/order.proto'),
          loader: {
            longs: Number,
          },
        },
      },
      {
        name: 'USER_RPC_CLIENT',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:9003',
          package: 'user',
          protoPath: join(__dirname, '../../proto/user.proto'),
          loader: {
            longs: Number,
          },
        },
      },
    ]),
  ],
  providers: [RPCService],
  exports: [RPCService],
})
export class RPCModule {}
