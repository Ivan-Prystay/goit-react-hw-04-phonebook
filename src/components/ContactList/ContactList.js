import { Component } from 'react';
import PropTypes from 'prop-types';

import { Contact } from 'components/Contact/Contact';
import { ListContact } from './ContactList.styled';

export class ContactList extends Component {
  render() {
    const { filterContact, contacts, deleteContact } = this.props;
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
}

ContactList.propTypes = {
  filterContact: PropTypes.array.isRequired,
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
