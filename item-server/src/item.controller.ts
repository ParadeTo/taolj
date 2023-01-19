import { Controller } from '@nestjs/common';
import { Pagination } from './gen-code/common';
import {
  Item,
  Items,
  ItemServiceController,
  ItemServiceControllerMethods
} from './gen-code/item';
import { ItemById } from './gen-code/item';

const items = [
  { id: 1, name: 'Banana Peel' },
  { id: 2, name: 'Waste Paper' }
];

@Controller('item')
@ItemServiceControllerMethods()
export class ItemController implements ItemServiceController {
  getItems(request: Pagination): Items {
    return { list: items };
  }
  findOne(data: ItemById): Item {
    return items.find(({ id }) => id === data.id);
  }
}
