import React from 'react';
import { IFilm } from '../../../shared/types';

const ListItem: React.SFC<{ item: IFilm }> = ({ item }) => (
  <li>
    <img src={item.artwork} alt={item.artwork} />
  </li>
);

export default ListItem;
