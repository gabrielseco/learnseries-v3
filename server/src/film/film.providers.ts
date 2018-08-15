import { Connection, Repository } from 'typeorm';
import { FilmEntity } from './film.entity';
import { Constants } from '../constants';

export const filmProviders = [
  {
    provide: Constants.FilmRepositoryToken,
    useFactory: (connection: Connection) =>
      connection.getRepository(FilmEntity),
    inject: [Constants.DbConnectionToken]
  }
];
