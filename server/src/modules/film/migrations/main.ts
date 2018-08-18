import { IMigrationFilm } from './migration-film.interface';
import { MigrationFilm } from './migration-film.model';
import { FilmMigrationService } from './../services';

export class FilmMigration {
  data: IMigrationFilm[];
  constructor(
    films: IMigrationFilm[],
    private readonly filmService: FilmMigrationService
  ) {
    this.data = films;
  }

  async init() {
    const parsedFilms = this.parseMigrationData();
    for (const film of parsedFilms) {
      const filmInserted = await this.filmService.insert(film);
      console.log('film', filmInserted);
    }
  }

  private parseMigrationData(): MigrationFilm[] {
    return this.data.map(film => new MigrationFilm(film));
  }
}
