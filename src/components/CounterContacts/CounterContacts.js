import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CounterContacts = ({ total }) => (
  <div>
    <p>
      <span>Total {total} contacts</span>
    </p>
  </div>
);

CounterContacts.propTypes = {
  total: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  total: state.contacts.items.length,
});

export default connect(mapStateToProps)(CounterContacts);
