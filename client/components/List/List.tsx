import React from 'react';
import { ListItem } from 'components';
import { ListContainer } from './List.style';
import { IFilm } from '../../../shared/types';

const List: React.SFC<{ items: IFilm[] }> = ({ items }) => (
  <ListContainer>
    {items.map((film: IFilm) => (
      <ListItem item={film} />
    ))}
  </ListContainer>
);

export default List;
