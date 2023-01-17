import { Item, ItemServiceController } from './gen-code/item';
import { ItemById, ItemWithOrderInfo } from './gen-code/item';
import { ItemService } from './item.service';
export declare class ItemController implements ItemServiceController {
    private itemService;
    constructor(itemService: ItemService);
    findOneWithOrder(request: ItemById): Promise<ItemWithOrderInfo>;
    findOne(data: ItemById): Item;
}
