import React from 'react';
import { IFilm } from '../../../shared/types';
import { ListItem } from 'components';

const List: React.SFC<{ items: IFilm[] }> = ({ items }) => (
  <ul>
    {items.map((film: IFilm) => (
      <ListItem item={film} />
    ))}
  </ul>
);

export default List;
