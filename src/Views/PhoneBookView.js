import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts';

import 'react-toastify/dist/ReactToastify.css';
import style from '../styles/PhoneBook.module.css';

import Section from '../components/UI/Section';
import FormContact from '../components/FormContact';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import CounterContacts from '../components/CounterContacts';

export default function PhoneBookView(total) {
  const dispatch = useDispatch();
  //const isLoadingContacts = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.Page}>
      <ToastContainer position="top-right" />
      <Section title="Add new contact">
        <FormContact />
        <CounterContacts total={total} />
        <Filter />
      </Section>
      <ContactList />
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
