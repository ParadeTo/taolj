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
  {
    id: 1,
    name: 'Banana Peel',
    url: 'https://images.indianexpress.com/2021/10/banana-peel-1200.jpg'
  },
  {
    id: 2,
    name: 'Waste Paper',
    url: 'https://www.wpt-nl.com/images/module_image/img1_800_600_1593777835.jpg'
  }
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
