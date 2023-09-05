// first line of code you should write whenever you make a new react file
import React from "react";

//  <ContactList contacts={contacts} setSelectedContact={setSelectedContact} />;
const ContactList = ({ contacts, setSelectedContact }) => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => (
          // for each contact item, we want another row

          // whenever i click on a tr, it would set selected contact with this contact
          <tr
            key={contact.id}
            onClick={() => {
              setSelectedContact(contact);
            }}
          >
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactList;