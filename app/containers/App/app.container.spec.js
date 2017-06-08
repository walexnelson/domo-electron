import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Container from './app.container';

const mockStore = configureMockStore([thunk]);
const storeStateMock = {
  login: {
    isLoading: false,
    logins: [],
  },
};

function setup() {
  const store = mockStore(storeStateMock);
  const component = shallow(<Container store={store}><span /></Container>).shallow();
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
