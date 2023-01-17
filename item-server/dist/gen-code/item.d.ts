import { Observable } from "rxjs";
import { Pagination } from "./common";
export declare const protobufPackage = "item";
export interface ItemById {
    id: number;
}
export interface Item {
    id: number;
    name: string;
}
export interface Items {
    list: Item[];
}
export declare const ITEM_PACKAGE_NAME = "item";
export interface ItemServiceClient {
    findOne(request: ItemById): Observable<Item>;
    getItems(request: Pagination): Observable<Items>;
}
export interface ItemServiceController {
    findOne(request: ItemById): Promise<Item> | Observable<Item> | Item;
    getItems(request: Pagination): Promise<Items> | Observable<Items> | Items;
}
export declare function ItemServiceControllerMethods(): (constructor: Function) => void;
export declare const ITEM_SERVICE_NAME = "ItemService";
