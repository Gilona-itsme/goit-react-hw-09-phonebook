import React, { useState, useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import { updateContact, getContacts, addContact } from '../../redux/contacts';
import s from './ChangeFormContact.module.css';
import PrimeryButton from '../UI/Button';

export default function ChangeFormContact({ onSave, data }) {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const isFistRender = useRef(true);

  const loginInput = uuidv4();

  useEffect(() => {
    if (!data) {
      return;
    }

    if (isFistRender.current) {
      isFistRender.current = false;
      setName(data.name);
      setNumber(data.number);
      console.log('render effect');
    }
  }, [data]);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        console.log(data);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        toast.error(`The type of field name - ${name} is not correct`);
    }

    console.log(value);
  };

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      if (name === '' || number === '') {
        return toast.error('Please enter name and phone');
      }

      if (contacts.some(contact => contact.name === name && !data)) {
        return toast.error(`${name} is already in contacts`);
      }
      if (data) {
        if (
          contacts.some(
            contact => contact.name === name && contact.number === number,
          )
        ) {
          return toast.error(`${name} is already in contacts`);
        }

        dispatch(updateContact(data.id, name, number));
        toast.dark(`The contact ${name} was  successfully edited`, {
          position: 'top-left',
        });
      } else {
        dispatch(addContact({ name, number }));
        toast.dark(`The contact ${name} was added`, {
          position: 'top-left',
        });
      }
      console.log(name);
      console.log(number);

      onSave();
      setName('');
      setNumber('');
    },
    [dispatch, contacts, data, onSave, name, number],
  );

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor={loginInput}>
        Name
        <input
          className={s.input}
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
          placeholder="Enter name, please"
          id={loginInput}
        />
      </label>
      <label className={s.label} htmlFor={loginInput}>
        Phone
        <input
          className={s.input}
          type="tel"
          value={number}
          name="number"
          onChange={handleChange}
          placeholder="Enter phone, please"
        />
      </label>
      {data ? (
        <PrimeryButton type="submit" className={s.button}>
          Save
        </PrimeryButton>
      ) : (
        <PrimeryButton type="submit" className={s.button}>
          Add
        </PrimeryButton>
      )}
    </form>
  );
}

ChangeFormContact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

// class ChangeFormContact extends Component {
//   state = INITIAL_STATE;

//   componentDidMount() {
//     const { contactId, name, number } = this.props;
//     this.setState({ contactId, name, number });
//   }

//   heandleInput = event => {
//     this.setState({ [event.currentTarget.name]: event.currentTarget.value });
//   };

//   updateContact = event => {
//     event.preventDefault();

//     this.props.onEdit({ ...this.state });
//     this.props.onCloseModal();
//     this.setState({
//       contactId: '',
//       name: '',
//       number: '',
//     });
//     this.resertForm();
//   };

//   resertForm = () => {
//     this.setState(INITIAL_STATE);
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form className={s.form} onSubmit={this.updateContact}>
//         <label className={s.label} htmlFor={this.loginInput}>
//           Name
//           <input
//             className={s.input}
//             type="text"
//             value={name}
//             name="name"
//             onChange={this.heandleInput}
//             placeholder="Enter name, please"
//             id={this.loginInput}
//           />
//         </label>
//         <label className={s.label} htmlFor={this.loginInput}>
//           Phone
//           <input
//             className={s.input}
//             type="tel"
//             value={number}
//             name="number"
//             onChange={this.heandleInput}
//             placeholder="Enter phone, please"
//           />
//         </label>
//         <PrimeryButton type="submit" className={s.button}>
//           Update Contact
//         </PrimeryButton>
//       </form>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   contacts: getContacts(state),
// });

// const mapDispatchProps = dispatch => ({
//   onEdit: ({ contactId, name, number }) =>
//     dispatch(contactsOperations.updateContact({ contactId, name, number })),
// });

// export default connect(null, mapDispatchProps)(ChangeFormContact);
