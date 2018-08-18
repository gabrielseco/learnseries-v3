import { IMigrationFilm } from './migration-film.interface';
import { IFilm } from '../../../../../shared/types';

export class MigrationFilm implements IFilm {
  id: number;
  name: string;
  overview?: string;
  artwork: string;
  year: number;
  idMovieDB?: number;
  colour?: string;
  createdAt: string;
  updatedAt: string;

  constructor(migrationFilm: IMigrationFilm) {
    this.id = parseInt(migrationFilm.id, 10);
    this.name = migrationFilm.nombre;
    this.overview =
      migrationFilm.overview === '' ? undefined : migrationFilm.overview;
    this.artwork = migrationFilm.imagen;
    this.year = parseInt(migrationFilm.year, 10);
    this.idMovieDB =
      parseInt(migrationFilm.idMovieDB, 10) === 0
        ? undefined
        : parseInt(migrationFilm.idMovieDB, 10);
    this.colour =
      migrationFilm.color !== null ? '#' + migrationFilm.color : undefined;
    this.createdAt = migrationFilm.createdAt;
    this.updatedAt = migrationFilm.updatedAt;
  }
}
