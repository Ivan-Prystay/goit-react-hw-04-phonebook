import PropTypes from 'prop-types';
import { ContactItem, DeleteContact } from './Contact.styled';

export function Contact({ contact, deleteContact }) {
  const { id, name, number } = contact;
  return (
    <ContactItem key={id}>
      {name}
      {': '}
      {number}
      <DeleteContact type="button" onClick={() => deleteContact(id)}>
        Delete contact
      </DeleteContact>
    </ContactItem>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
