import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

import s from "./FormContact.module.scss";
import PrimeryButton from "../UI/Button";

const INITIAL_STATE = {
  name: "",
  phone: "",
};

export default class FormContact extends Component {
  state = INITIAL_STATE;

  loginInput = uuidv4();

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone } = this.state;
    const { onAddContact } = this.props;

    //this.props.onAddContact(this.state.name);
    const isValidateForm = this.validateForm();
    if (!isValidateForm) return;

    onAddContact({ id: uuidv4(), name, phone });

    this.resertForm();
  };

  validateForm = () => {
    const { name, phone } = this.state;
    const { onCheckUnique } = this.props;
    if (!name || !phone) {
      alert("Some filed is empty");
      return false;
    }
    return onCheckUnique(name);
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
