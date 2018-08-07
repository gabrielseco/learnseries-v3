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
  async findOneById(_: any, args: { id: string}): Promise<Film> {
    const { id } = args;
    const film = await this.filmsService.findOneById(parseInt(id, 10));
    if (film !== undefined) {
      return film;
    } else {
      throw new Error('Film is not found');
    }
  }
}
