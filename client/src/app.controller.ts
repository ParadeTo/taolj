import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('SUM_SERVICE') private client: ClientProxy) {}

  @Get()
  sum(): any {
    return this.client.send({ cmd: 'sum' }, [1, 2]);
  }
}

// 82#{"pattern":{"cmd":"sum"},"data":[1,2],"id":"1a745af8-b0e6-4643-8cb3-2552bc5c869b"}
// 82#{"pattern":{"cmd":"sum"},"data":[1,2],"id":"1a745af8-b0e6-4643-8cb3-2552bc5c8693"}
// 81#{"pattern":{"cmd":"sum"},"data":[1,2],"id":"1a745af8-b0e6-4643-8cb3-2552bc5c8693"}
