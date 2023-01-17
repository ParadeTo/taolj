import { Observable } from "rxjs";
import { Order } from "./order";
export declare const protobufPackage = "item";
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
export declare const ITEM_PACKAGE_NAME = "item";
export interface ItemServiceClient {
    findOne(request: ItemById): Observable<Item>;
    findOneWithOrder(request: ItemById): Observable<ItemWithOrderInfo>;
}
export interface ItemServiceController {
    findOne(request: ItemById): Promise<Item> | Observable<Item> | Item;
    findOneWithOrder(request: ItemById): Promise<ItemWithOrderInfo> | Observable<ItemWithOrderInfo> | ItemWithOrderInfo;
}
export declare function ItemServiceControllerMethods(): (constructor: Function) => void;
export declare const ITEM_SERVICE_NAME = "ItemService";
