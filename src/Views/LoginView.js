import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logIn } from '../redux/auth/authOperations';

import Button from '../components/UI/Button';
import style from '../styles/AuthForm.module.css';
import Section from '../components/UI/Section';

export class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Section title="Sing in to Phonebook">
        <form onSubmit={this.handleSubmit} autoComplete="off">
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
          <Button type="submit">Sing in</Button>
        </form>
      </Section>
    );
  }
}

LoginView.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
};

const mapDispatchToProps = {
  onLogin: logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
