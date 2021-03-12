import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getContactsLength } from '../../redux/contacts';

const CounterContacts = ({ total }) => (
  <>
    <p>You have {total} contacts</p>
  </>
);

CounterContacts.propTypes = {
  total: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  total: getContactsLength(state),
});

export default connect(mapStateToProps)(CounterContacts);
