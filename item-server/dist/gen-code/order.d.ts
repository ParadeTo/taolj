import { Observable } from "rxjs";
export declare const protobufPackage = "order";
export interface OrderById {
    id: number;
}
export interface Order {
    id: number;
    name: string;
}
export declare const ORDER_PACKAGE_NAME = "order";
export interface OrderServiceClient {
    findOne(request: OrderById): Observable<Order>;
}
export interface OrderServiceController {
    findOne(request: OrderById): Promise<Order> | Observable<Order> | Order;
}
export declare function OrderServiceControllerMethods(): (constructor: Function) => void;
export declare const ORDER_SERVICE_NAME = "OrderService";
