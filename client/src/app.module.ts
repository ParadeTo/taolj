import { Inject, Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  ClientProxyFactory,
  Transport,
  ClientProxy,
} from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  // imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'SUM_SERVICE',
      // inject: [ConfigService],
      useFactory: () =>
        ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: '127.0.0.1',
            port: 3002,
          },
        }),
    },
  ],
})
export class AppModule {
  // constructor(@Inject('SUM_SERVICE') private client: ClientProxy) {}
  // hello() {
  //   console.log(this.client.send({ cmd: 'sum' }, [1, 2]));
  // }
}
