import { Pagination } from './gen-code/common';
import { Item, Items, ItemServiceController } from './gen-code/item';
import { ItemById } from './gen-code/item';
export declare class ItemController implements ItemServiceController {
    getItems(request: Pagination): Items;
    findOne(data: ItemById): Item;
}
