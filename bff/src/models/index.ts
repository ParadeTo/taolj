import {
  Field,
  ID,
  ObjectType,
  Float,
  GraphQLTimestamp,
  Int,
} from '@nestjs/graphql';

@ObjectType({ description: 'item' })
export class Item {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  url: string;
}

@ObjectType({ description: 'order' })
export class Order {
  @Field(() => ID)
  id: number;

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  createTime: number;

  @Field(() => [Item])
  items?: Item[];
}
