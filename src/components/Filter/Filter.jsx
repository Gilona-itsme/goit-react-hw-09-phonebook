import React from "react";
import { connect } from "react-redux";

import contactsActions from "../redux/contactsActions";

import s from "./Filter.module.css";

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

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchProps = (dispatch) => ({
  onChangeFilter: (event) =>
    dispatch(contactsActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchProps)(Filter);
