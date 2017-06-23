import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './home.container.scss';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.homeContainer}>
        <h1>Hello World</h1>
        <ul>
          <li><NavLink to="/datasets">Datasets</NavLink></li>
        </ul>
      </div>
    );
  }
}
