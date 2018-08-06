import { Injectable } from '@nestjs/common';
import { Film } from './interfaces/film.interface';
import FilmsData from './films.data';

@Injectable()
export class FilmsService {
  private readonly films: Film[] = FilmsData;

  create(film: Film): Film {
    this.films.push(film);
    return film;
  }

  findAll(): Film[] {
    return this.films;
  }

  findOneById(id: number): Film {
    return this.films.find(film => film.id === id);
  }
}
