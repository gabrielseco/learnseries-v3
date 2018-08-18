import { Module } from '@nestjs/common';
import { FilmService, FilmMigrationService } from './services';
import { FilmResolvers } from './film.resolvers';
import { DatabaseModule } from '../../database/database.module';
import { filmProviders } from './film.providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    FilmService,
    FilmMigrationService,
    FilmResolvers,
    ...filmProviders
  ]
})
export class FilmModule {}
