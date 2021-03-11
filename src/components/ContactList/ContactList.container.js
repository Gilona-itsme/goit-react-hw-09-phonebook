import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import { changeFilter } from '../../redux/contacts/contactsActions';
import ContactList from './ContactList';
import { getVisibleContacts } from '../../redux/contacts/contactsSelectors';

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchProps = dispatch => ({
  onRemove: id => dispatch(deleteContact(id)),
  onChangeFilter: event => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchProps)(ContactList);
