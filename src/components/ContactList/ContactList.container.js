import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contactsOperations';
import { changeFilter } from '../../redux/contactsActions';
import ContactList from './ContactList';
import { getVisibleContacts } from '../../redux/contactsSelectors';

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchProps = dispatch => ({
  onRemove: id => dispatch(deleteContact(id)),
  onChangeFilter: event => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchProps)(ContactList);
