import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';

import { getContacts } from '../../redux/contacts';
import * as contactsOperations from '../../redux/contacts';

import s from './FormContact.module.css';
import PrimeryButton from '../UI/Button';

const INITIAL_STATE = {
  name: '',
  number: '',
};
class FormContact extends Component {
  state = INITIAL_STATE;

  loginInput = uuidv4();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    if (name === '') {
      toast.error('Please enter name');
      return;
    }

    if (number === '') {
      toast.error('Please enter phone');
      return;
    }

    if (this.props.contacts.find(items => items.name === name)) {
      toast.error(`${name} is already in contacts`);
      return;
    }

    this.props.onSubmit({ id: uuidv4(), name, number });
    this.resertForm();
  };

  resertForm = () => {
    this.setState(INITIAL_STATE);
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label} htmlFor={this.loginInput}>
          Name
          <input
            className={s.input}
            type="text"
            value={name}
            name="name"
            onChange={this.handleChange}
            placeholder="Enter name, please"
            id={this.loginInput}
          />
        </label>
        <label className={s.label} htmlFor={this.loginInput}>
          Phone
          <input
            className={s.input}
            type="tel"
            value={number}
            name="number"
            onChange={this.handleChange}
            placeholder="Enter phone, please"
          />
        </label>
        <PrimeryButton type="submit" className={s.button}>
          Add Contact
        </PrimeryButton>
      </form>
    );
  }
}

FormContact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

const mapStateToProps = state => ({
  contacts: getContacts(state),
});

const mapDispatchProps = dispatch => ({
  onSubmit: ({ name, number }) =>
    dispatch(contactsOperations.addContact({ name, number })),
});

export default connect(mapStateToProps, mapDispatchProps)(FormContact);
