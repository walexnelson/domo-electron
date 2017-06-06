import React, { Component } from 'react';
import IconAdd from 'material-ui/svg-icons/content/add';
import styles from './header.component.scss';
import DomoLogo from '../../../resources/icons/domo-logo.png';
import ElectronLogo from '../../../resources/icons/128x128.png';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.brand}>
          <img alt="Domo" src={DomoLogo} className={styles.brandImg} />
          <IconAdd className={styles.brandIcon} />
          <img alt="Electron" src={ElectronLogo} className={styles.brandImg} />
        </div>
      </header>
    );
  }
}
