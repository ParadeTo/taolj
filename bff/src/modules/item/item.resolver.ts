import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Args, ID, Int } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { Item } from 'src/models';
import { ItemService } from './item.service';

@Resolver(() => Item)
@UseGuards(JwtAuthGuard)
export class ItemResolver {
  constructor(private readonly itemService: ItemService) {}

  @Query(() => Item)
  async item(@Args('id', { type: () => ID }) id: number) {
    return this.itemService.findOne(id);
  }

  @Query(() => [Item])
  async items(
    @Args('page', { type: () => Int }) page: number,
    @Args('pageSize', { type: () => Int }) pageSize: number,
  ) {
    const items = await this.itemService.getItems(page, pageSize);
    console.log(items);

    return items;
  }
}
