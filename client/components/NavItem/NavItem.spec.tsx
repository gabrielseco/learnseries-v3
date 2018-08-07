import React from 'react';
import { shallow } from 'enzyme';

import NavItem from './NavItem';

describe('NavItem suite', () => {
  it('should render the NavItem component', () => {
    const component = shallow(<NavItem />);
    expect(component).toBeDefined();
  });
});
