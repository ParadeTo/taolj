import { NestFactory } from '@nestjs/core';
import { Transport, GrpcOptions } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<GrpcOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'item',
      protoPath: join(__dirname, '../../proto/item.proto'),
      url: 'localhost:9001',
    },
  });
  await app.listen();
}
bootstrap();
