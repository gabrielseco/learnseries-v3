import React from 'react';
import { shallow } from 'enzyme';

import Layout from './Layout';

describe('Layout suite', () => {
  it('should render the Layout component', () => {
    const component = shallow(<Layout />);
    expect(component).toBeDefined();
  });
});
