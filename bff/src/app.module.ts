import {
  AbstractGraphQLDriver,
  GqlModuleOptions,
  GraphQLModule,
} from '@nestjs/graphql';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Module } from '@nestjs/common';
import { graphqlHTTP } from 'express-graphql';
import { ItemModule } from './modules/item/item.module';
import { join } from 'path';
import { RPCModule } from './modules/rpc/rpc.module';

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

    // ClientsModule.register([
    //   {
    //     name: 'ITEM_RPC_CLIENT',
    //     transport: Transport.GRPC,
    //     options: {
    //       url: 'localhost:9001',
    //       package: 'item',
    //       protoPath: join(__dirname, '../../proto/item.proto'),
    //     },
    //   },
    //   {
    //     name: 'ORDER_RPC_CLIENT',
    //     transport: Transport.GRPC,
    //     options: {
    //       url: 'localhost:9002',
    //       package: 'order',
    //       protoPath: join(__dirname, '../../proto/order.proto'),
    //     },
    //   },
    // ]),
    GraphQLModule.forRoot({
      driver: ExpressGraphQLDriver,
      autoSchemaFile: 'schema.gql',
      // transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
      // installSubscriptionHandlers: true,
      // buildSchemaOptions: {
      //   directives: [
      //     new GraphQLDirective({
      //       name: 'upper',
      //       locations: [DirectiveLocation.FIELD_DEFINITION],
      //     }),
      //   ],
      // },
    }),
  ],
})
export class AppModule {}
