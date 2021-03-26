import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getContactsLength } from '../../redux/contacts';

export default function CounterContacts() {
  const total = useSelector(getContactsLength);

  return <p>You have {total} contacts</p>;
}

CounterContacts.propTypes = {
  total: PropTypes.number,
};

// const CounterContacts = ({ total }) => (
//   <>
//     <p>You have {total} contacts</p>
//   </>
// );

// const mapStateToProps = state => ({
//   total: getContactsLength(state),
// });

// export default connect(mapStateToProps)(CounterContacts);
