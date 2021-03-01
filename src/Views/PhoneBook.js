import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import style from '../styles/PhoneBook.module.css';

import Container from '../components/UI/Container';
import Section from '../components/UI/Section';
import FormContact from '../components/FormContact';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';

const PhoneBook = () => {
  return (
    <Container title="Phonebook">
      <ToastContainer position="top-right" />
      <Section title="Add new contact">
        <FormContact />
      </Section>

      <CSSTransition
        // in={contacts.length > 1}
        in
        timeout={500}
        classNames={style}
        unmountOnExit
      >
        <Section title="Find contact by name">
          <Filter />
        </Section>
      </CSSTransition>

      <Section title="Contacts">
        <ContactList />
      </Section>
    </Container>
  );
};

export default PhoneBook;
