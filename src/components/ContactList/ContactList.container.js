import { connect } from 'react-redux';
import contactsActions from '../../redux/contactsActions';
import ContactList from './ContactList';

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchProps = dispatch => ({
  onRemove: id => dispatch(contactsActions.deleteContact(id)),
  onChangeFilter: event =>
    dispatch(contactsActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchProps)(ContactList);
