import React, { Component } from "react";
import PropTypes from "prop-types";

class ContactCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      mobilePhone: this.props.mobilePhone,
      workPhone: this.props.workPhone,
      email: this.props.email,
    };
  }

  hasWorkPhone = () => {
    if (this.state.workPhone != null) {
      return <li className="list-group-item">{this.state.workPhone}</li>;
    }
  };

  render() {
    const card = (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-header bg-dark" style={{ color: "white" }}>
          {this.state.name}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{this.state.mobilePhone}</li>
          {this.hasWorkPhone()}
          <li className="list-group-item">{this.state.email}</li>
        </ul>
      </div>
    );
    return card;
  }
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  mobilePhone: PropTypes.string.isRequired,
  workPhone: PropTypes.string,
  email: PropTypes.string.isRequired,
};

export default ContactCard;
