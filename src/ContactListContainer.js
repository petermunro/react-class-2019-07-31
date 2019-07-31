import React, { Component } from "react";
import ContactList from "./ContactList";

class ContactListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      isLoading: true,
      errors: ""
    };
  }

  render() {
    return (
      <div>
        {this.state.isLoading && <p>Loading...</p>}
        {this.state.errors && <p>An error occurred: {this.state.errors}</p>}
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }

  componentDidMount() {
    fetch("/contacts.json")
      .then(response => response.json())
      .then(contacts => this.setState({ contacts: contacts }))
      .catch(err => this.setState({ errors: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }
}

export default ContactListContainer;
