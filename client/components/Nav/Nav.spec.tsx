import React from 'react';
import { shallow } from 'enzyme';

import Nav from './Nav';
import { NavItem } from './../NavItem';

describe('Nav suite', () => {
  it('should render the Nav component', () => {
    const component = shallow(
      <Nav>
        <NavItem URL="#">Films</NavItem>
      </Nav>
    );
    expect(component).toBeDefined();
  });
});
