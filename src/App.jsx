import { useState, useEffect } from 'react';
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from 'nanoid';


const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) :
      [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ];
  }
  );

  const [filter, setFilter] = useState('');
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (newContact) => {
    const duplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (duplicate) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    const updatedContacts = [newContact, ...contacts];
    setContacts(updatedContacts);
  };

  const deleteContact = (contactId) => {
    const updatedContacts = contacts.filter(contact => contact.id !== contactId);
    setContacts(updatedContacts);
  };

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact}/>
      <SearchBox value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact}/>
    </div>
  );
};

export default App;
