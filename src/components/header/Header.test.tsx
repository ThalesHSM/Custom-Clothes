import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('MyComponent', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Header />);
  });

  it('should render the Header', () => {
    expect(component).toMatchSnapshot();
    component.unmount();
  });
});
