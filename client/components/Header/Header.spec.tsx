import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Header suite', () => {
  it('should render the Header component', () => {
    const component = shallow(<Header />);
    expect(component).toBeDefined();
  });
});
