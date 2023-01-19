import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { Item } from 'src/models';
import { ItemService } from './item.service';

@Resolver(() => Item)
export class ItemResolver {
  constructor(private readonly itemService: ItemService) {}

  @Query(() => Item)
  async item(@Args('id', { type: () => ID }) id: number) {
    const item = this.itemService.findOne(id);
    return item;
  }
}
