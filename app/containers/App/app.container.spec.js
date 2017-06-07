import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Container from './app.container';


function setup() {
  const component = shallow(<Container />);
  return {
    component
  };
}

describe('(Container): App', () => {
  it('should render', () => {
    const { component } = setup();
    expect(component.first().type()).to.equal('div');
  });
});
