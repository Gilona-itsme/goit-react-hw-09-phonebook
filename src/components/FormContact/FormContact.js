import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';

import { getContacts } from '../../redux';
import * as contactsOperations from '../../redux';

import s from './FormContact.module.css';
import PrimeryButton from '../UI/Button';

const INITIAL_STATE = {
  name: '',
  phone: '',
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

    const { name, phone } = this.state;

    if (name === '') {
      toast.error('Please enter name');
      return;
    }

    if (phone === '') {
      toast.error('Please enter phone');
      return;
    }
    console.log(this.props.contacts);
    console.log(this.props.contacts.items);

    if (this.props.contacts.find(items => items.name === name)) {
      toast.error(`${name} is already in contacts`);
      return;
    }

    this.props.onSubmit({ id: uuidv4(), name, phone });
    this.resertForm();
  };

  resertForm = () => {
    this.setState(INITIAL_STATE);
  };

  render() {
    const { name, phone } = this.state;
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
          Number
          <input
            className={s.input}
            type="tel"
            value={phone}
            name="phone"
            onChange={this.handleChange}
            placeholder="Enter phone, please"
          />
        </label>
        <PrimeryButton type="submit">Add Contact</PrimeryButton>
      </form>
    );
  }
}

FormContact.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.number,
};

const mapStateToProps = state => ({
  contacts: getContacts(state),
});

const mapDispatchProps = dispatch => ({
  onSubmit: ({ name, phone }) =>
    dispatch(contactsOperations.addContact({ name, phone })),
});

export default connect(mapStateToProps, mapDispatchProps)(FormContact);
