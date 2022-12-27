import PropTypes from 'prop-types';

import { Contact } from 'components/Contact/Contact';
import { ListContact } from './ContactList.styled';

export function ContactList({ filterContact, contacts, deleteContact }) {
  let arr = filterContact;
  if (!filterContact) {
    arr = contacts;
  }
  return (
    <ListContact>
      {arr.map(item => (
        <Contact key={item.id} contact={item} deleteContact={deleteContact} />
      ))}
    </ListContact>
  );
}

ContactList.propTypes = {
  filterContact: PropTypes.array.isRequired,
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
