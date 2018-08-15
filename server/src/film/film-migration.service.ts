import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Constants } from '../constants';
import { FilmEntity } from './film.entity';
import { MigrationFilm } from './migrations/migration-film.model';

@Injectable()
export class FilmMigrationService {
  constructor(
    @Inject(Constants.FilmRepositoryToken)
    private readonly filmRepository: Repository<FilmEntity>
  ) {}

  async insert(migrationFilm: MigrationFilm) {
    const data = await this.filmRepository.save(migrationFilm);
    return new Promise((resolve, rejected) => {
      resolve({
        message: 'Film migrated',
        data: data
      });
    });
  }
}
