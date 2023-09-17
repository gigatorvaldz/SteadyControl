import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import importJson from './utils/ImportJson';

async function bootstrap() {


  await importJson();

  const PORT = process.env.PORT || 5000;

  const app = await NestFactory.create(AppModule);
  app.enableCors();

  await app.listen(PORT);
}
bootstrap();
