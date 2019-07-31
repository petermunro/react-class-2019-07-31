import React from "react";
import Contact from "./Contact";

const ContactList = props => {
  const contactComponents = props.contacts.map(contact => (
    <Contact
      name={contact.fullName}
      email={contact.email}
      address={contact.address}
      key={contact.id}
    />
  ));

  return <div>{contactComponents}</div>;
};

export default ContactList;
