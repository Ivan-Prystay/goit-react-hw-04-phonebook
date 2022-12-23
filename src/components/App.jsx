import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import contacts from '../path/contacts.json';

export class App extends Component {
  state = {
    contacts: contacts,
    filter: '',
  };

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: `id-${nanoid(2)}`,
      name,
      number,
    };
    const { contacts } = this.state;

    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      alert(`A contact with the name ${contact.name} already exists.`);

      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  filterContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidUpdate(prevState, prevProsp) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const contactsParsed = JSON.parse(contacts);
    if (contactsParsed) {
      this.setState({ contacts: contactsParsed });
    }
  }

  render() {
    return (
      <div
        style={{
          paddingLeft: '24px',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          onSubmit={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} handleChange={this.handleChange} />
        <ContactList
          filterContact={this.filterContact()}
          contacts={this.state.contacts}
          filter={this.state.filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

//New commit
