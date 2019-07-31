import React, { Component } from "react";
import Address from "./Address";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }

  render() {
    let { name, email, address } = this.props;
    return (
      <div>
        <h2 onClick={this.handleClick}>{name}</h2>

        {this.state.isExpanded && (
          <div>
            <p>
              <em>{email}</em>
            </p>
            <Address address={address} />
          </div>
        )}
      </div>
    );
  }

  handleClick = () => {
    this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
  };
}

export default Contact;
