import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import defaultContacts from '../path/contacts.json';

export function App() {
  const [contacts, setContacts] = useState(defaultContacts);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const contact = {
      id: `id-${nanoid(2)}`,
      name: name,
      number: number,
    };

    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      alert(`A contact with the name ${contact.name} already exists.`);
      return;
    }
    setContacts([...contacts, contact]);
  };

  const filterContact = () => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const storageContacts = localStorage.getItem('contacts');
  const contactsParsed = JSON.parse(storageContacts);

  useEffect(() => {
    if (contactsParsed) {
      setContacts(contactsParsed);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        paddingLeft: '24px',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter
        filter={filter}
        handleChange={e => setFilter(e.currentTarget.value)}
      />
      <ContactList
        filterContact={filterContact()}
        contacts={contacts}
        deleteContact={deleteContact}
      />
    </div>
  );
}
