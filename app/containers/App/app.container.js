// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import { Header } from '../../components';

export default class App extends Component {
  props: {
    children: Children
  };

  render() {
    return (
      <div className="styles.container">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
