import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Container from './data.container';

function setup() {
  const mockStore = configureMockStore([thunk]);
  const storeStateMock = {
    data: {
      isLoading: false,
      datasets: [],
    },
  };


  const store = mockStore(storeStateMock);
  const component = shallow(<Container store={store}><span /></Container>).shallow();
  return {
    component
  };
}

describe('(Container): Data', () => {
  it('should render', () => {
    const { component } = setup();
    expect(component.first().type()).to.equal('div');
  });
});
