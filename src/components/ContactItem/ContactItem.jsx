import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as UpdateIcon } from '../UI/icons/pencil.svg';
import IconButton from '../UI/IconButton';
import { ReactComponent as IconDelete } from '../UI/icons/delete.svg';

import ChangeFormContact from '../ChangeFormContact/ChangeFormContact';
import Modal from '../Modal';

import s from './ContactItem.module.css';

const ContactItem = ({ name, number, onRemove, ContactId }) => {
  const [showModal, setShowModal] = useState(false);
  const [contactItem, setContactItem] = useState(null);

  const handleItemClick = () => {
    setContactItem({ name, number, id: ContactId });
  };

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  return (
    <>
      <li className={s.items} onClick={handleItemClick}>
        <p className={s.contact}>
          <span className={s.name}>{name}</span>:
          <span className={s.phone}>{number}</span>
        </p>
        <span className={s.buttonBox}>
          <IconButton type="button" aria-label="Updata" onClick={toggleModal}>
            <UpdateIcon width="25" height="25" fill="#fff" />
          </IconButton>
          <IconButton type="button" onClick={onRemove} aria-label="Delete">
            <IconDelete width="25" height="25" fill="#fff" />
          </IconButton>
        </span>
        <CSSTransition
          in={showModal}
          unmountOnExit
          classNames={s}
          timeout={500}
        >
          <Modal onClose={toggleModal}>
            <ChangeFormContact onSave={toggleModal} data={contactItem} />
          </Modal>
        </CSSTransition>
      </li>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactItem;
