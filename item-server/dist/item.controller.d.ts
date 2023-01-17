import { Pagination } from './gen-code/common';
import { Item, Items, ItemServiceController } from './gen-code/item';
import { ItemById } from './gen-code/item';
import { ItemService } from './item.service';
export declare class ItemController implements ItemServiceController {
    private itemService;
    constructor(itemService: ItemService);
    getItems(request: Pagination): Items;
    findOne(data: ItemById): Item;
}
