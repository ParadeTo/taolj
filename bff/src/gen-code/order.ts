/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Pagination } from "./common";

export const protobufPackage = "order";

export interface OrderById {
  id: number;
}

export interface Order {
  id: number;
  price: number;
  createTime: number;
  itemIds: number[];
}

export interface Orders {
  orders: Order[];
}

export const ORDER_PACKAGE_NAME = "order";

export interface OrderServiceClient {
  findOne(request: OrderById): Observable<Order>;

  getOrders(request: Pagination): Observable<Orders>;
}

export interface OrderServiceController {
  findOne(request: OrderById): Promise<Order> | Observable<Order> | Order;

  getOrders(request: Pagination): Promise<Orders> | Observable<Orders> | Orders;
}

export function OrderServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["findOne", "getOrders"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("OrderService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("OrderService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const ORDER_SERVICE_NAME = "OrderService";
