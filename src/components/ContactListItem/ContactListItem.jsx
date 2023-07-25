import React from 'react';
import PropTypes from 'prop-types';

export const ContactListItem = ({ contact, handleDeleteContact }) => {
  const handleDelete = () => {
    handleDeleteContact(contact.id);
  };

  return (
    <li>
      {contact.name} : {contact.number}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};
ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
export default ContactListItem;
