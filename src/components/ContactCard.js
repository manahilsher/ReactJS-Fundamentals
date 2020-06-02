import React, { Component } from "react";

class ContactCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      phone: this.props.phone,
      email: this.props.email,
    };
  }

  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-header bg-dark" style={{ color: "white" }}>
          {this.state.name}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{this.state.phone}</li>
          <li className="list-group-item">{this.state.email}</li>
        </ul>
      </div>
    );
  }
}

export default ContactCard;
