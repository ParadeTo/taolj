import { Controller, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom, Observable } from 'rxjs';
import {
  Item,
  ItemServiceController,
  ItemServiceControllerMethods,
} from './gen-code/item';
import { ItemById, ItemWithOrderInfo } from './gen-code/item';
import { Order } from './gen-code/order';
import { ItemService } from './item.service';

const items = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Doe' },
];

@Controller('item')
@ItemServiceControllerMethods()
export class ItemController implements ItemServiceController {
  constructor(private itemService: ItemService) {}
  async findOneWithOrder(request: ItemById): Promise<ItemWithOrderInfo> {
    const order = await lastValueFrom<Order>(
      this.itemService.orderClient.findOne({ id: 1 }),
    );

    const item = items.find(({ id }) => id === request.id);
    return { ...item, order };
  }
  findOne(data: ItemById): Item {
    return items.find(({ id }) => id === data.id);
  }
}
