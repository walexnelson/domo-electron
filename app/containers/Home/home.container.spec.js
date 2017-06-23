import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Container from './home.container';


function setup() {
  const component = shallow(<Container />);
  return {
    component
  };
}

describe('(Container): Home', () => {
  it('should render', () => {
    const { component } = setup();
    expect(component.first().type()).to.equal('div');
  });
});
