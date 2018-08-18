import React from 'react';
import { shallow } from 'enzyme';

import ListItem from './ListItem';

describe('ListItem suite', () => {
  it('should render the ListItem component', () => {
    const component = shallow(<ListItem />);
    expect(component).toBeDefined();
  });
});
