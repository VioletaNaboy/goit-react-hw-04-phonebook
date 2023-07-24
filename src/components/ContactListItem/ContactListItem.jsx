import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

export const ContactListItem = ({ contact }) => {
  const { handleDeleteContact } = useContext(AppContext);

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

export default ContactListItem;
