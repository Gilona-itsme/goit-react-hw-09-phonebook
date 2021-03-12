import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as authOperations from '../redux/auth/authOperations';

import Button from '../components/UI/Button';

import style from '../styles/AuthForm.module.css';
import Section from '../components/UI/Section';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <Section title="Sing up to Phonebook">
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label className={style.label}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label className={style.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label className={style.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <Button type="submit">Sing up</Button>
        </form>
      </Section>
    );
  }
}

RegisterView.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
};

const mapDispatchToProps = dispatch => ({
  onRegister: credentials => dispatch(authOperations.registerPost(credentials)),
});
// const mapDispatchToProps = {
//   onRegister: register,
// };

export default connect(null, mapDispatchToProps)(RegisterView);
