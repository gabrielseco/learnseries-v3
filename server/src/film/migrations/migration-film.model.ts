import { IMigrationFilm } from './migration-film.interface';
import { IFilm } from '../../../../shared/types';

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
    this.id = migrationFilm.id;
    this.name = migrationFilm.nombre;
    this.overview =
      migrationFilm.overview === '' ? undefined : migrationFilm.overview;
    this.artwork = migrationFilm.imagen;
    this.year = migrationFilm.year;
    this.idMovieDB =
      migrationFilm.idMovieDB === 0 ? undefined : migrationFilm.idMovieDB;
    this.colour =
      migrationFilm.color !== 'NULL' ? '#' + migrationFilm.color : undefined;
    this.createdAt = migrationFilm.createdAt;
    this.updatedAt = migrationFilm.updatedAt;
  }
}
