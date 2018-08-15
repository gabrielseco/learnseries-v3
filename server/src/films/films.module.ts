import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsResolvers } from './films.resolvers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    DatabaseModule
  ],
  providers: [
    FilmsService, 
    FilmsResolvers
  ],
})
export class FilmsModule {}
