import { Query, Resolver } from '@nestjs/graphql';

import { IFilm } from './../../../../shared/types';
import { FilmService, FilmMigrationService } from './services';
import { FilmMigration } from './migrations/main';
import FilmsData from './data/film.data';

@Resolver('Film')
export class FilmResolvers {
  constructor(
    private readonly filmService: FilmService,
    private readonly filmMigrationService: FilmMigrationService
  ) {}

  @Query('films')
  async getFilms() {
    return await this.filmService.findAll();
  }

  @Query('film')
  async findOneById(_: any, args: { id: string }): Promise<IFilm> {
    const { id } = args;
    const film = await this.filmService.findOneById(parseInt(id, 10));
    if (film !== undefined) {
      return film;
    } else {
      throw new Error('Film is not found');
    }
  }

  @Query('migrationFilm')
  async migrateFilm() {
    const migration: FilmMigration = new FilmMigration(
      FilmsData,
      this.filmMigrationService
    );

    migration.init();
  }
}
