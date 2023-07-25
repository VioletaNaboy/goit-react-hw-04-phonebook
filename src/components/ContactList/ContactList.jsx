import React from 'react';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import css from './ContactsList.module.css';
import PropTypes from 'prop-types';
export const ContactList = ({ filteredContacts, handleDeleteContact }) => {
  return (
    <ul className={css.contactsList}>
      {filteredContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
