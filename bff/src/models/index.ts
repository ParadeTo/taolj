import {
  Field,
  ID,
  ObjectType,
  Float,
  GraphQLTimestamp,
} from '@nestjs/graphql';

@ObjectType({ description: 'item' })
export class Item {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;
}

@ObjectType({ description: 'order' })
export class Order {
  @Field(() => ID)
  id: number;

  @Field(() => Float)
  price: number;

  @Field(() => GraphQLTimestamp)
  createTime: number;

  @Field(() => [Item])
  items?: Item[];
}
