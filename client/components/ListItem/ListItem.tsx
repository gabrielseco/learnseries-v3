import React from 'react';
import { IFilm } from '../../../shared/types';

const ListItem: React.SFC<{ item: IFilm }> = ({ item }) => (
  <li>
    <img
      src={item.artwork}
      alt={item.name}
      title={item.name}
      width="230"
      height="345"
    />
  </li>
);

export default ListItem;
