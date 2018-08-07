import React from 'react';
import { shallow } from 'enzyme';

import Nav from './Nav';

describe('Nav suite', () => {
  it('should render the Nav component', () => {
    const component = shallow(<Nav />);
    expect(component).toBeDefined();
  });
});
