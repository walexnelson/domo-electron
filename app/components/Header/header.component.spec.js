import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from './header.component';

function setup() {
  const component = shallow(<Header />);
  return {
    component
  };
}

describe('(Component): Header', () => {
  it('should render', () => {
    const { component } = setup();
    expect(component.first().type()).to.equal('header');
  });
});
