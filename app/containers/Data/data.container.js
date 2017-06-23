import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './data.container.scss';

import { getDatasetList } from '../../store/actions/data.actions';

class Data extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDatasetList('name', 50, 0));
  }

  render() {
    return (
      <div className={styles.dataContainer}>
        <h1>Datacenter</h1>
        {
          this.props.isLoading
          ? 'Loading...'
          : <ul>{ this.props.datasets.map(ds => <li key={ds.id}>{ds.name}</li>)}</ul>
        }
      </div>
    );
  }
}

Data.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  datasets: PropTypes.arrayOf(PropTypes.shape).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { data } = state;

  return data;
};

export default connect(mapStateToProps)(Data);
