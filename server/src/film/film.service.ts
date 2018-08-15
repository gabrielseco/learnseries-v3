import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Film } from './../../../shared/types';
import { Constants } from '../constants';

@Injectable()
export class FilmService {
  constructor(
    @Inject(Constants.FilmRepositoryToken)
    private readonly filmRepository: Repository<Film>
  ) {}
  private films: Film[] = [];

  create(film: Film): Film {
    this.films.push(film);
    return film;
  }

  async findAll(): Promise<Film[]> {
    const films = await this.filmRepository.find();
    return new Promise<Film[]>((resolve, rejected) => {
      resolve(films);
    });
  }

  findOneById(id: number): Film | undefined {
    return this.films.find(film => film.id === id);
  }
}
