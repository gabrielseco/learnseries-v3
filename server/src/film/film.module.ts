import { Module } from '@nestjs/common';
import { FilmService } from './film.service';
import { FilmResolvers } from './film.resolvers';
import { DatabaseModule } from '../database/database.module';
import { filmProviders } from './film.providers';

@Module({
  imports: [DatabaseModule],
  providers: [FilmService, FilmResolvers, ...filmProviders]
})
export class FilmModule {}
