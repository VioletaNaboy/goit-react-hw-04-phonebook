import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class ContactListItem extends Component {
  handleDelete = () => {
    const { contact, onDeleteContact } = this.props;
    onDeleteContact(contact.id);
  };
  render() {
    const { contact } = this.props;

    return (
      <li>
        {contact.name} : {contact.number}
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
  static propTypes = {
    contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };
}
