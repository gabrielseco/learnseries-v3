import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IFilm } from './../../../../shared/types';
import { Constants } from '../../constants';
import { Film } from './../entities/film.entity';

@Injectable()
export class FilmService {
  constructor(
    @Inject(Constants.FilmRepositoryToken)
    private readonly filmRepository: Repository<Film>
  ) {}
  private films: IFilm[] = [];

  create(film: IFilm): IFilm {
    this.films.push(film);
    return film;
  }

  async findAll(): Promise<Film[]> {
    const films = await this.filmRepository.find();
    return new Promise<Film[]>((resolve, rejected) => {
      resolve(films);
    });
  }

  findOneById(id: number): IFilm | undefined {
    return this.films.find(film => film.id === id);
  }
}
