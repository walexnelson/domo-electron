import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from '../../components';
import { getLogins } from '../../store/actions/login.actions';
import styles from './app.container.scss';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getLogins());
  }

  render() {
    const listItems = this.props.logins.map(login =>
      <li key={login}>{login}</li>
    );

    const content = this.props.isLoading
      ? <h2>Loading...</h2>
      : (
        <main className={styles.content}>
          <ul>{listItems}</ul>
          {this.props.children}
        </main>
        );

    return (
      <div className={styles.appContainer}>
        <Header />
        {content}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
  logins: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const { login } = state;

  return login;
};

export default connect(mapStateToProps)(App);
