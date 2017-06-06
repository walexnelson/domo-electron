import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Root from './root.container';


function setup() {
  const mockStore = {
    subscribe: () => {},
    dispatch: () => {},
    getState: () => {}
  };

  const component = shallow(<Root store={mockStore} history={{}} />);
  return {
    component
  };
}

describe('(Container): Root', () => {
  it('should render', () => {
    const { component } = setup();
    expect(component.first().type()).to.equal(Provider);
  });
});
