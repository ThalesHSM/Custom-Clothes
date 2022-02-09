import React from 'react';
import { shallow, mount } from 'enzyme';
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
});
