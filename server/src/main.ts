import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule, {
    cors: true,
  });
  await app.listen(PORT);
}
bootstrap();
