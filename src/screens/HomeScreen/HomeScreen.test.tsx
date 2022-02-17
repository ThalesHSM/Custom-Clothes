import * as React from 'react';
import { shallow } from 'enzyme';

import HomeScreen from './HomeScreen';

describe('MyComponent', () => {
  let component;

  beforeEach(() => {
    component = shallow(<HomeScreen />);
  });

  it('should render the HomeScreen', () => {
    expect(component).toMatchSnapshot();
    component.unmount();
  });

  it('should change the state and show login menu', () => {});
});
