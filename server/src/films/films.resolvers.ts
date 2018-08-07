import {
  Query,
  Resolver,
} from '@nestjs/graphql';

import { Film } from './interfaces/film.interface';
import { FilmsService } from './films.service';

@Resolver('Film')
export class FilmsResolvers {
  constructor(private readonly filmsService: FilmsService) {}

  @Query('films')
  async getFilms() {
    return await this.filmsService.findAll();
  }

  @Query('film')
  async findOneById(_: any, args: { id: number}): Promise<Film> {
    const { id } = args;
    return await this.filmsService.findOneById(+id);
  }
}
