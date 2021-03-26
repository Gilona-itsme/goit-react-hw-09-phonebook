import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as UpdateIcon } from '../icons/pencil.svg';
import IconButton from '../UI/IconButton';
import { ReactComponent as IconDelete } from '../icons/delete.svg';

import ChangeFormContact from '../ChangeFormContact/ChangeFormContact';
import Modal from '../Modal';

import s from './ContactItem.module.css';

const ContactItem = ({ name, number, onRemove, onClickOpen }) => {
  const [showModal, setShowModal] = useState(false);
  const [contactItem, setContactItem] = useState(null);

  const handleItemClick = () => {
    setContactItem({ name, number, id: onClickOpen });
  };

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  return (
    <>
      <li className={s.item} onClick={handleItemClick}>
        <p className={s.contact}>
          <span className={s.name}>{name}</span>:
          <span className={s.phone}>{number}</span>
          <span className={s.buttonBox}>
            <IconButton type="button" aria-label="Updata" onClick={toggleModal}>
              <UpdateIcon width="25" height="25" fill="#fff" />
            </IconButton>
            <IconButton type="button" onClick={onRemove} aria-label="Delete">
              <IconDelete width="25" height="25" fill="#fff" />
            </IconButton>
          </span>
          {showModal && (
            <Modal onClose={toggleModal}>
              <ChangeFormContact onSave={toggleModal} data={contactItem} />
            </Modal>
          )}
        </p>
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
