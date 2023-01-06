import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const appModule = app.get(AppModule);
  // console.log(appModule.hello());
  await app.listen(3001);
}
bootstrap();
