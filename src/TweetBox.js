import React, { Component } from "react";

const MAXLENGTH = 10;

class TweetBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  render() {
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.message}
          cols="30"
          rows="3"
        />
        <p>{MAXLENGTH - this.state.message.length} characters remaining</p>
        <button onClick={() => this.props.onSend(this.state.message)}>
          Send
        </button>
      </div>
    );
  }

  handleChange = event => {
    if (event.target.value.length > MAXLENGTH) {
      return;
    }
    this.setState({ message: event.target.value });
  };
}

export default TweetBox;
