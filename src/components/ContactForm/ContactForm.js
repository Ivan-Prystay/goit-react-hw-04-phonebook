import { customAlphabet } from 'nanoid';
import PropTypes from 'prop-types';
import { useState } from 'react';

import {
  FormContact,
  AddContact,
  NameInput,
  TelInput,
} from './ContactForm.styled';

export function ContactForm(props) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nanoid = customAlphabet('1234567890', 2);

  // const handleChange = e => {
  //   const { name, value } = e.currentTarget;

  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;

  //     case 'number':
  //       setNumber(value);
  //       break;

  //     default:
  //       return;
  //   }
  // };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  NameInput.id = nanoid();
  TelInput.id = nanoid();

  return (
    <FormContact onSubmit={handleSubmit}>
      <label htmlFor={NameInput.id}>Name</label>
      <NameInput
        type="text"
        name="name"
        autoComplete="off"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={
          //handleChange
          e => setName(e.currentTarget.value)
        }
        value={name}
        id={NameInput.id}
      />
      <label htmlFor={TelInput.id}>Number</label>
      <TelInput
        type="tel"
        name="number"
        autoComplete="off"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={
          //handleChange
          e => setNumber(e.currentTarget.value)
        }
        value={number}
        id={TelInput.id}
      />
      <AddContact type="submit" value="Add contact" />
    </FormContact>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
