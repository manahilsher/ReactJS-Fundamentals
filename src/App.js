import React, { Component } from "react";
import ContactCard from "./components/ContactCard";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          name: "Manahil Sher",
          mobilePhone: "123-345-7890",
          workPhone: "012-345-6789",
          email: "manahil.sher@gmail.com",
        },
        {
          name: "Somebody Else",
          mobilePhone: "246-810-1214",
          email: "somebody.else@gmail.com",
        },
        {
          name: "Another Person",
          mobilePhone: "369-121-5182",
          workPhone: "281-512-1963",
          email: "another.person@gmail.com",
        },
      ],
    };
  }

  render() {
    const contacts = this.state.contacts.map((contact) => {
      return (
        <>
          <br></br>
          <ContactCard
            name={contact.name}
            mobilePhone={contact.mobilePhone}
            workPhone={contact.workPhone}
            email={contact.email}
          />
          <br></br>
        </>
      );
    });

    return (
      <>
        <h1 style={{ color: "purple" }}>Contact Card</h1>
        {contacts}
      </>
    );
  }
}

export default App;
