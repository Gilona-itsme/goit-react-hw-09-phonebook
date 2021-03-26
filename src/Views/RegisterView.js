import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as authOperations from '../redux/auth/authOperations';
import { getUserEmail } from '../redux/auth/authSelectors';

import Button from '../components/UI/Button';

import style from '../styles/AuthForm.module.css';
import Section from '../components/UI/Section';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const authUser = useSelector(getUserEmail);

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      dispatch(
        authOperations.registerPost({ name, email, password, confirmPassword }),
      );

      if (password !== confirmPassword) {
        toast('Password do not match');
        return;
      }

      if (name === '') {
        toast.error('Please enter name ');
        return;
      }
      if (email === '') {
        toast.error('Please enter email');
        return;
      }

      if (authUser.find(user => user.email === email)) {
        toast.error(`User with ${email} is already in registered`);
        return;
      }
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    },
    [dispatch, name, email, password, confirmPassword, authUser],
  );

  return (
    <Section title="Sing up to Phonebook">
      <form onSubmit={handleSubmit} autoComplete="off">
        <label className={style.label}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label className={style.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={style.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <label className={style.label}>
          Confirm password
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
          />
        </label>
        <Button type="submit">Sing up</Button>
      </form>
    </Section>
  );
}

RegisterView.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
};
// class RegisterView extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onRegister(this.state);
//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { name, email, password } = this.state;
//     return (
//       <Section title="Sing up to Phonebook">
//         <form onSubmit={this.handleSubmit} autoComplete="off">
//           <label className={style.label}>
//             Name
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//             />
//           </label>
//           <label className={style.label}>
//             Email
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </label>
//           <label className={style.label}>
//             Password
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             />
//           </label>
//           <Button type="submit">Sing up</Button>
//         </form>
//       </Section>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   onRegister: credentials => dispatch(authOperations.registerPost(credentials)),
// });
// const mapDispatchToProps = {
//   onRegister: register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);
