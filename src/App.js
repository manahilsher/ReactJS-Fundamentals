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
          phone: "123-345-7890",
          email: "manahil.sher@gmail.com",
        },
        {
          name: "Somebody Else",
          phone: "012-345-6789",
          email: "somebody.else@gmail.com",
        },
        {
          name: "Another Person",
          phone: "246-810-1214",
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
            phone={contact.phone}
            email={contact.email}
          />
          <br></br>
        </>
      );
    });

    return (
      <>
        <h1 style={{ color: "purple" }}>ReactJS Fundamentals</h1>
        {contacts}
      </>
    );
  }
}

export default App;
