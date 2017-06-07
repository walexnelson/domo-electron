// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import { Header } from '../../components';
import styles from './app.container.scss';

export default class App extends Component {
  props: {
    children: Children
  };

  render() {
    return (
      <div className={styles.appContainer}>
        <Header />
        <main className={styles.content}>
          {this.props.children}
        </main>
      </div>
    );
  }
}
