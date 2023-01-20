import {
  AbstractGraphQLDriver,
  GqlModuleOptions,
  GraphQLModule,
} from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { graphqlHTTP } from 'express-graphql';
import { ItemModule } from './modules/item/item.module';
import { RPCModule } from './modules/rpc/rpc.module';
import { OrderModule } from './modules/order/order.module';

class ExpressGraphQLDriver extends AbstractGraphQLDriver {
  async stop(): Promise<void> {
    console.log('stop');
  }
  async start(options: GqlModuleOptions<any>): Promise<void> {
    options = await this.graphQlFactory.mergeWithSchema(options);
    const { httpAdapter } = this.httpAdapterHost;
    httpAdapter.use(
      '/graphql',
      graphqlHTTP({
        schema: options.schema,
        graphiql: true,
      }),
    );
  }
}

@Module({
  imports: [
    RPCModule,
    ItemModule,
    OrderModule,
    GraphQLModule.forRoot({
      driver: ExpressGraphQLDriver,
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class AppModule {}
