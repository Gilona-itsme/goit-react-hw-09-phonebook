import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import IconButton from '../UI/IconButton';
import Modal from '../Modal/index';
import ChangeFormContact from '../ChangeFormContact/ChangeFormContact';
import { ReactComponent as AddIcon } from '../UI/icons/add.svg';

import s from './FormContact.module.css';

// const INITIAL_STATE = {
//   name: '',
//   number: '',
// };
export default function FormContact() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  return (
    <div className={s.formBox}>
      <IconButton
        type="button"
        onClick={toggleModal}
        aria-label="Add task"
        className={s.button}
      >
        <AddIcon width="40" height="40" fill="#fff" />
      </IconButton>
      <CSSTransition in={showModal} unmountOnExit classNames={s} timeout={500}>
        <Modal onClose={toggleModal}>
          <ChangeFormContact onSave={toggleModal} />
        </Modal>
      </CSSTransition>
    </div>
  );
}

FormContact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

// class FormContact extends Component {
//   state = INITIAL_STATE;

//   loginInput = uuidv4();

//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     const { name, number } = this.state;

//     if (name === '') {
//       toast.error('Please enter name');
//       return;
//     }

//     if (number === '') {
//       toast.error('Please enter phone');
//       return;
//     }

//     if (this.props.contacts.find(items => items.name === name)) {
//       toast.error(`${name} is already in contacts`);
//       return;
//     }

//     this.props.onSubmit({ id: uuidv4(), name, number });
//     this.resertForm();
//   };

//   resertForm = () => {
//     this.setState(INITIAL_STATE);
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form className={s.form} onSubmit={this.handleSubmit}>
//         <label className={s.label} htmlFor={this.loginInput}>
//           Name
//           <input
//             className={s.input}
//             type="text"
//             value={name}
//             name="name"
//             onChange={this.handleChange}
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
//             onChange={this.handleChange}
//             placeholder="Enter phone, please"
//           />
//         </label>
//         <PrimeryButton type="submit" className={s.button}>
//           Add Contact
//         </PrimeryButton>
//       </form>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   contacts: getContacts(state),
// });

// const mapDispatchProps = dispatch => ({
//   onSubmit: ({ name, number }) =>
//     dispatch(contactsOperations.addContact({ name, number })),
// });

// export default connect(mapStateToProps, mapDispatchProps)(FormContact);
