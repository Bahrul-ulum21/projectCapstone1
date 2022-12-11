import React from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data";
import ContactInput from "./ContactInput";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData(),
    };

    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }

  onAddContactHandler({ name, tag }) {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: "/images/default.jpg",
            createdAt: new Date().toDateString(),
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="contact-app">
        <h3>Review Customer</h3>
        <ContactList
          contacts={this.state.contacts}
        />
        <ContactInput addContact={this.onAddContactHandler} />
      </div>
    );
  }
}

export default ContactApp;
