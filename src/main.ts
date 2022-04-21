import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: {
    origin: 'http://localhost:4200',
    credentials: true,
  }});
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
