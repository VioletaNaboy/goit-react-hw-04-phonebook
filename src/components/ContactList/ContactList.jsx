import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import css from './ContactsList.module.css';

export const ContactList = () => {
  const { filteredContacts } = useContext(AppContext);

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
