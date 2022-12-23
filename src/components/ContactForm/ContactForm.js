import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import {
  FormContact,
  AddContact,
  NameInput,
  TelInput,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  NameInput = nanoid(3);
  TelInput = nanoid(3);

  render() {
    return (
      <FormContact onSubmit={this.handleSubmit}>
        <label htmlFor={this.NameInput}>Name</label>
        <NameInput
          type="text"
          name="name"
          autoComplete="off"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
          value={this.state.name}
          id={this.NameInput}
        />
        <label htmlFor={this.TelInput}>Number</label>
        <TelInput
          type="tel"
          name="number"
          autoComplete="off"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
          value={this.state.number}
          id={this.TelInput}
        />
        <AddContact type="submit" value="Add contact" />
      </FormContact>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
