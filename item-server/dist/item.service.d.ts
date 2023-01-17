import { OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { OrderServiceClient } from './gen-code/order';
export declare class ItemService implements OnModuleInit {
    private client;
    orderClient: OrderServiceClient;
    constructor(client: ClientGrpc);
    onModuleInit(): void;
}
