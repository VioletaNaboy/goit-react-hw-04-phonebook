import React, { createContext, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (name, number) => {
    const isContactExists = contacts.some(contact => contact.name === name);

    if (isContactExists) {
      alert(`${name} is already in contacts.`);
    } else {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      setContacts(prevContacts => [...prevContacts, newContact]);
    }
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const handleDeleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <AppContext.Provider
      value={{
        contacts,
        filter,
        handleAddContact,
        handleFilterChange,
        handleDeleteContact,
        filteredContacts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
