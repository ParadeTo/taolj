import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'orderClient',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:9002',
          package: 'order',
          protoPath: join(__dirname, '../../proto/order.proto'),
        },
      },
    ]),
  ],
  controllers: [ItemController],
  providers: [ItemService],
})
export class AppModule {}
