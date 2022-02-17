import React from 'react';
import { shallow } from 'enzyme';
import Header from './Footer';

describe('MyComponent', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Header />);
  });

  it('should render the Header', () => {
    expect(component).toMatchSnapshot();
    component.unmount();
  });

  it('should call login function', () => {
    const mock = jest.fn();
    const newComponent = shallow(
      <Header isLoginMenuOpen={false} setIsLoginMenuOpen={mock} />
    );

    newComponent.find('#login-button').simulate('click');
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
