import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsResolvers } from './films.resolvers';

@Module({
  providers: [FilmsService, FilmsResolvers],
})
export class FilmsModule {}
