import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import style from '../styles/PhoneBook.module.css';

import Container from '../components/UI/Container';
import Section from '../components/UI/Section';
import FormContact from '../components/FormContact';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';

export default class App extends Component {
  // state = {
  //   contacts: [],
  //   filter: "",
  // };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // handleNewContact = (newContact) => {
  //   this.setState(({ contacts }) => {
  //     return {
  //       contacts: [...contacts, newContact],
  //     };
  //   });
  // };

  // handleCheckUniqueContact = name => {
  //   const { contacts } = this.state;

  //   const isExitContact = contacts.find(contact => contact.name === name);

  //   isExitContact && toast.error(`${name} is already in contacts`);

  //   return !isExitContact;
  // };

  // handleRemoveContact = (id) => {
  //   this.setState(({ contacts }) => ({
  //     contacts: contacts.filter((contact) => contact.id !== id),
  //   }));
  // };

  // handleChangeFilter = (filter) => {
  //   this.setState({ filter });
  // };

  // getVisibleContacts = () => {
  //   const { contacts, filter } = this.state;
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  render() {
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
  }
}
