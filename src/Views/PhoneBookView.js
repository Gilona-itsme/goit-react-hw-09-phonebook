import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import * as contactsOperations from '../redux';
import { getIsLoading } from '../redux';

import 'react-toastify/dist/ReactToastify.css';
import style from '../styles/PhoneBook.module.css';

import Section from '../components/UI/Section';
import FormContact from '../components/FormContact';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';

class PhoneBookView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <>
        <ToastContainer position="top-right" />
        <Section title="Add new contact">
          <FormContact />
        </Section>

        <CSSTransition in timeout={500} classNames={style} unmountOnExit>
          <Section title="Find contact by name">
            <Filter />
          </Section>
        </CSSTransition>

        <Section title="Contacts">
          {this.props.isLoadingContacts && <h1>...is loading</h1>}
          <ContactList />
        </Section>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: getIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookView);
