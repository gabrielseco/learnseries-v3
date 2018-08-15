import { Connection, Repository } from 'typeorm';
import { Film } from './film.entity';
import { Constants } from '../constants';

export const filmProviders = [
  {
    provide: Constants.FilmRepositoryToken,
    useFactory: (connection: Connection) => connection.getRepository(Film),
    inject: [Constants.DbConnectionToken]
  }
];
