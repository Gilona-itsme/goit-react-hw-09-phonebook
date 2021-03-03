import React from 'react';
import { connect } from 'react-redux';

import { changeFilter } from '../../redux';
import { getFilter } from '../../redux';
import s from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className={s.filter}>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChangeFilter}
        name="filter"
        placeholder="Enter name for Search"
      ></input>
    </div>
  );
};

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchProps = dispatch => ({
  onChangeFilter: event => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchProps)(Filter);
