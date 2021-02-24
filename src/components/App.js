import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import style from "./App.module.css";

import Container from "./UI/Container";
import Section from "./UI/Section";
import FormContact from "./FormContact";
import ContactList from "./ContactList";
import Filter from "./Filter";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleNewContact = (newContact) => {
    this.setState(({ contacts }) => {
      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  handleCheckUniqueContact = (name) => {
    const { contacts } = this.state;

    const isExitContact = contacts.find((contact) => contact.name === name);

    isExitContact && alert(`${name} is already in contacts`);

    return !isExitContact;
  };

  handleRemoveContact = (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));
  };

  handleChangeFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = this.getVisibleContacts();
    return (
      <Container title="Phonebook">
        <Section title="Add new contact">
          <FormContact
            onAddContact={this.handleNewContact}
            onCheckUnique={this.handleCheckUniqueContact}
          />
        </Section>
        {/* {contacts.length > 1 &&  */}
        <CSSTransition
          in={contacts.length > 1}
          timeout={500}
          classNames={style}
          unmountOnExit
        >
          <Section title="Find contact by name">
            <Filter value={filter} onChangeFilter={this.handleChangeFilter} />
          </Section>
        </CSSTransition>

        {/* {contacts.length > 0 && ( */}
        <Section title="Contacts">
          {/* {contacts.length !== 0 ? ( */}
          <ContactList
            contacts={visibleContacts}
            onRemove={this.handleRemoveContact}
          />
          {/* ) : (
            <h3>No contacts</h3>
          )} */}
        </Section>
        {/* )} */}
      </Container>
    );
  }
}
