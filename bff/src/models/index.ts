import { Field, ID, ObjectType, Float, Int } from '@nestjs/graphql';

@ObjectType({ description: 'item' })
export class Item {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  url: string;
}

@ObjectType({ description: 'order' })
export class Order {
  @Field()
  id: number;

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  createTime: number;

  @Field(() => [Item])
  items?: Item[];
}

@ObjectType({ description: 'user' })
export class User {
  @Field()
  id: number;

  @Field()
  name: string;
}
