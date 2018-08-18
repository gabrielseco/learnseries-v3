import React from 'react';
import { shallow } from 'enzyme';

import List from './List';

describe('List suite', () => {
  it('should render the List component', () => {
    const component = shallow(<List />);
    expect(component).toBeDefined();
  });
});
