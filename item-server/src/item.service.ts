import { Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { OrderServiceClient, ORDER_SERVICE_NAME } from './gen-code/order';

@Injectable()
export class ItemService {}
