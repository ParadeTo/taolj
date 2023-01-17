/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Order } from "./order";

export const protobufPackage = "item";

export interface ItemById {
  id: number;
}

export interface Item {
  id: number;
  name: string;
}

export interface ItemWithOrderInfo {
  id: number;
  name: string;
  order: Order | undefined;
}

export const ITEM_PACKAGE_NAME = "item";

export interface ItemServiceClient {
  findOne(request: ItemById): Observable<Item>;

  findOneWithOrder(request: ItemById): Observable<ItemWithOrderInfo>;
}

export interface ItemServiceController {
  findOne(request: ItemById): Promise<Item> | Observable<Item> | Item;

  findOneWithOrder(request: ItemById): Promise<ItemWithOrderInfo> | Observable<ItemWithOrderInfo> | ItemWithOrderInfo;
}

export function ItemServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["findOne", "findOneWithOrder"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ItemService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ItemService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const ITEM_SERVICE_NAME = "ItemService";
