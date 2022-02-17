import * as React from 'react';
import { shallow } from 'enzyme';

import Clothes from './Clothes';

describe('MyComponent', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Clothes />);
  });

  it('should render the Clothes', () => {
    expect(component).toMatchSnapshot();
    component.unmount();
  });

  it('should send user to specific screen', () => {});
});
