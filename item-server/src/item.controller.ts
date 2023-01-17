import { Controller, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom, Observable } from 'rxjs';
import { Pagination } from './gen-code/common';
import {
  Item,
  Items,
  ItemServiceController,
  ItemServiceControllerMethods
} from './gen-code/item';
import { ItemById } from './gen-code/item';
import { ItemService } from './item.service';

const items = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Doe' }
];

@Controller('item')
@ItemServiceControllerMethods()
export class ItemController implements ItemServiceController {
  constructor(private itemService: ItemService) {}
  getItems(request: Pagination): Items {
    console.log(request);

    return { list: items };
  }
  findOne(data: ItemById): Item {
    return items.find(({ id }) => id === data.id);
  }
}
