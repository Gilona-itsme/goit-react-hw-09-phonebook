import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, getIsLoading } from '../redux/contacts';

import 'react-toastify/dist/ReactToastify.css';
import style from '../styles/PhoneBook.module.css';

import Section from '../components/UI/Section';
import FormContact from '../components/FormContact';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import Loader from '../components/Loader';

export default function PhoneBookView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.Page}>
      <ToastContainer position="top-right" />
      <Section title="Add new contact">
        <FormContact />
        <Filter />
      </Section>

      <Section title="Contacts">
        {isLoadingContacts ? <Loader /> : <ContactList />}
      </Section>
    </div>
  );
}

// class PhoneBookView extends Component {
//   // state = {
//   //   showModal: false,
//   // };
//   componentDidMount() {
//     this.props.fetchContacts();
//   }

//   // toggleModal = () => {
//   //   this.setState(({ showModal }) => ({ showModal: !showModal }));
//   // };

//   render() {
//     return (
//       <div className={style.Page}>
//         <ToastContainer position="top-right" />
//         <Section title="Add new contact">
//           <FormContact />
//           <Filter />
//         </Section>

//         {/* <CSSTransition in timeout={500} classNames={style} unmountOnExit>
//           <Section title="Find contact by name"></Section>
//         </CSSTransition> */}

//         <Section title="Contacts">
//           {this.props.isLoadingContacts && <h1>...is loading</h1>}
//           <ContactList />
//         </Section>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   isLoadingContacts: getIsLoading(state),
// });

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookView);
